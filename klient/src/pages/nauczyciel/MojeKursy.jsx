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
  }, [])

  return courses ? (
    <div>
      <div>
        <h2>Moje Kursy</h2>
      </div>
    </div>
  ) : <Loading />
}

export default MojeKursy