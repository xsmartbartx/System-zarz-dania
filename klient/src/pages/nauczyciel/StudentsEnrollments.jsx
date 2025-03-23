import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'

const ZapisyStudentów = () => {

  const [enrolledStudents, setEnrolledStudents] = useState(null)

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled)
  }

  useEffect(() => {
    fetchEnrolledStudents()
  }, [])

  return enrolledStudents ? (
    <div>
      <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Dane ucznia</th>
            <th>Nazwa kursu</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {zapisaniUczniowie.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={item.student.imageUrl} alt="" />
                <span>{item.student.name}</span>
              </td>
              <td>{item.courseTitle}</td>
              <td>{new Date(item.purchaseDate).toLocaleDateString}</td>
              <td>{newDate(course.createdAt).toLocateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  ) : <Loading />
}

export default ZapisyStudentów