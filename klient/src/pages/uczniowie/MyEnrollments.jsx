import React, { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import { Line } from 'rc-progress'
import { data } from 'react-router-dom'

const MyEnrollments = () => {

  const {EnrolledCourses, calculateCourseDuration, navigate, userData,
    fetchEnrolledCourses, backendUrl, getToken, calculateNoOfLectures } =
     useContext(AppContext);

  const [progressArray, setProgressArray] = useState([])

  const getCourseProgress = async ()=>{
    try {
      const token = await getToken();
      const tempProgressArray = await Promise.all(
        userEnrolledCourses.map(async (course)=>{
          const {data} = await axios.post(`${backendUrl}/api/user/get-course-progress`,
            {courseId: course._id}, {headers: { Autorization: `Bearer ${token}` }})
        let totalLectures = calculateNoOfLectures(course);
      const lectureCompleted = data.progressData ? data.progressData.
      lectureCompleted.length : 0;
      return {totalLectures, lectureCompleted}
      })
    )
    setProgressArray(tempProgressArray);

    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    if(userData){
      fetchEnrolledCourses()
    }
  },[userData])


  useEffect(()=>{
    if(EnrolledCourses.length > 0){
      getCourseProgress()
    }
  },[enrolledCourses])

  return (
    <>
    <div className='container mx-auto p-4'>
      <h1 className='text-2x1 font-semibold'>Zapisy</h1>
      <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
        <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
          <tr>
            <th>
              <td className='px-4 py-3 font-semibold truncate'>Kurs</td>
              <td className='px-4 py-3 font-semibold truncate'>Czas trwania</td>
              <td className='px-4 py-3 font-semibold truncate'>Zakończone</td>
              <td className='px-4 py-3 font-semibold truncate'>Status</td>
            </th>
          </tr>
        </thead>
        <tbody>
          {EnrolledCourses.map((course, index) => (
            <tr key={index} className='border-b border-gray-200'>
              <td>
                <img src={course.courseThumbnail} alt="" className='w-14 sm:w-24
                 md:w-28' />
                <div>
                  <p>{course.courseTytuł}</p>
                  <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures : 0} className='bg-gray-300 rounded-full' className='bg-gray-300 rounded-full'/>
                </div>
              </td>
              <td>
                {calculateCourseDuration(course)}
              </td>
              <td>
                {progressArray[[index] && `${progressArray[index].lectureCompleted}
                 / ${progressArray[index].totalLectures}`]}
                <span>Wykłady</span>
              </td>
              <td>
                <button onClick={()=> navigate('/player/' + course._id)}>{progressArray[index] && progressArray[index].lectureCompleted
                  / progressArray[index].totalLectures === 1 ? 'Ukończone' : 'W trakcie'}Zakończony</button>
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