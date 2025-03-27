import React, { useEffect, useState } from 'react' // Added missing useState import
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import { Line } from 'rc-progress'
import axios from 'axios' // Added missing axios import
import { toast } from 'react-toastify' // Added missing toast import
import Footer from '../../components/Footer' // Added missing Footer import

const MyEnrollments = () => {
  const {
    EnrolledCourses,
    calculateCourseDuration,
    navigate,
    userData,
    fetchEnrolledCourses,
    backendUrl,
    getToken,
    calculateNoOfLectures,
  } = useContext(AppContext)

  const [progressArray, setProgressArray] = useState([])

  const getCourseProgress = async () => {
    try {
      const token = await getToken()
      const tempProgressArray = await Promise.all(
        EnrolledCourses.map(async (course) => {
          const { data } = await axios.post(
            `${backendUrl}/api/user/get-course-progress`,
            { courseId: course._id },
            { headers: { Authorization: `Bearer ${token}` } } // Fixed typo in "Authorization"
          )
          let totalLectures = calculateNoOfLectures(course)
          const lectureCompleted = data.progressData
            ? data.progressData.lectureCompleted.length
            : 0
          return { totalLectures, lectureCompleted }
        })
      )
      setProgressArray(tempProgressArray)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (userData) {
      fetchEnrolledCourses()
    }
  }, [userData])

  useEffect(() => {
    if (EnrolledCourses.length > 0) {
      getCourseProgress()
    }
  }, [EnrolledCourses]) // Fixed typo in dependency array

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold">Zapisy</h1> {/* Fixed typo in className */}
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Kurs</th> {/* Fixed incorrect JSX structure */}
              <th className="px-4 py-3 font-semibold truncate">Czas trwania</th>
              <th className="px-4 py-3 font-semibold truncate">Zakończone</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody>
            {EnrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-3">
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24 md:w-28"
                  />
                  <div>
                    <p>{course.courseTitle}</p> {/* Fixed typo in property name */}
                    <Line
                      strokeWidth={2}
                      percent={
                        progressArray[index]
                          ? (progressArray[index].lectureCompleted * 100) /
                            progressArray[index].totalLectures
                          : 0
                      }
                      className="bg-gray-300 rounded-full"
                    />
                  </div>
                </td>
                <td className="px-4 py-3">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3">
                  {progressArray[index] &&
                    `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`}
                  <span> Wykłady</span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => navigate('/player/' + course._id)}
                  >
                    {progressArray[index] &&
                    progressArray[index].lectureCompleted /
                      progressArray[index].totalLectures ===
                      1
                      ? 'Ukończone'
                      : 'W trakcie'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  )
}

export default MyEnrollments