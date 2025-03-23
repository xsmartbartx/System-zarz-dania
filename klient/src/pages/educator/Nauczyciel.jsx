import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/nauczyciel/Navbar'
import Sidebar from '../../components/nauczyciel/Sidebar'
import Footer from '../../components/nauczyciel/Footer'

const Nauczyciel = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <div>
            {<Outlet />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Nauczyciel