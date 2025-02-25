import React from 'react'
import { Outlet } from 'react-router-dom'

const Nauczyciel = () => {
  return (
    <div>
      <h1>Strona Nauczyciela</h1>
      <div>
          {<Outlet />}
      </div>
    </div>
  )
}

export default Nauczyciel