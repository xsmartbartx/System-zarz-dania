import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'

const MojeKursy = () => {

  const {currency, allCourses} = useContext(AppContext)
  
  const [courses, setCourses] = useState(null)

  const fetchNauczycielCourses = async () => {
    setCourses(allCourses)
  }

  useEffect(() => {
    fetchNauczycielCourses()
  },[])

  return (
    <div><h1>MojeKursy</h1></div>
  )
}

export default MojeKursy