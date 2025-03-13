import React, { use, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const { isEducator } = useContext(AppContext)

  const menuItems = [
    {name: 'Panel', path: '/nauczyciel', icon:assets.home_icon},
    {name: 'DodajKurs', path: '/nauczyciel/dodaj-kurs', icon:assets.add_icon},
    {name: 'MojeKursy', path: '/nauczyciel/moje-kursy', icon:assets.home_my_course_icon},
    {name: 'ZapisanyUczeń', path: '/nauczyciel/uczen-zapisany', icon:assets.home_person_tick_icon},
  ]

  return (
    <div>
      <h1>Sidebar</h1>
    </div>
  )
}

export default Sidebar