import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/nauczyciel/Navbar'

const Nauczyciel = () => {
  return (
    <div>
      <Navbar />
      <div>
          {<Outlet />}
      </div>
    </div>
  )
}

export default Nauczyciel