import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
// import Ładowanie '../components/uczniowie/Ładowanie'

const MyCourses = () => {

  const {currency, backendUrl, isEducator, getToken} = useContext(AppContext)
  
  const [courses, setCourses] = useState(null)

  const fetchEducatorCourses = async () => {
    try {
      const token = await getToken()
      const { data } = await axios.get(backendUrl + '/api/educator/courses',
        {headers: { Autorization: `Bearer ${token}` }})

        data.success && setCourses(data.courses)

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(isEducator){
      fetchEducatorCourses()
    }
  }, [isEducator])

  return courses ? (
    <div>
      <div>
        <h2>Moje Kursy</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Wszystkie kursy</th>
            <th>Zarobki</th>
            <th>Uczniowie</th>
            <th>Oblikowane</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>
                <img src={course.courseThumbnail} alt="Wygląd kursu" />
                <span>{course.courseTitle}</span>
              </td>
              <td>{currency} {Math.floor(course.zapisaniUczniowie.length * 
                (course.coursePrice - course.discount * course.coursePrice / 100))}</td>
              <td>{course.zapisaniUczniowie.length}</td>
              <td>{newDate(course.createdAt).toLocateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : <Loading />
}

export default MyCourses