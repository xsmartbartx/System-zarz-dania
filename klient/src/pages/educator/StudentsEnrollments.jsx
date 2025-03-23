import React, { useContext, useEffect, useState } from 'react'
import Loading from '../../components/student/Loading';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
import axios from 'axios';
import { data } from 'react-router-dom';


const StudentsEnrollments = () => {

  const {backendUrl, getToken, isEducator} = useContext(AppContext)
  const [enrolledStudents, setEnrolledStudents] = useState(null)

  const fetchEnrolledStudents = async () => {
    try {
      const token = await getToken()
      const { data } = await axios.get(backendUrl + '/api/educator/enrolled-students',
        {headers: { Autorization: `Bearer ${token}` }})
      if (data.success){
        setEnrolledStudents(data.enrolledStudents.reverse())
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(isEducator){
      fetchEnrolledStudents()
    }
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
          {enrolledStudents.map((item, index) => (
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

export default StudentsEnrollments