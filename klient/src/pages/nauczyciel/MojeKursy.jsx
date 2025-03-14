import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
// import Ładowanie '../components/uczniowie/Ładowanie'

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
      <table>
        <thead>
          <tr>
            <th>Wszystkie kursy</th>
            <th>Zarobki</th>
            <th>Uczniowie</th>
            <th>Oblikowane</th>
          </tr>
        </thead>
      </table>
    </div>
  ) : <Loading />
}

export default MojeKursy