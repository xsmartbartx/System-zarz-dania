import React, { use, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const { isNauczyciel } = useContext(AppContext)

  const menuItems = [
    {name: 'Panel', path: '/nauczyciel', icon:assets.home_icon},
    {name: 'DodajKurs', path: '/nauczyciel/dodaj-kurs', icon:assets.add_icon},
    {name: 'MojeKursy', path: '/nauczyciel/moje-kursy', icon:assets.home_my_course_icon},
    {name: 'ZapisanyUczeń', path: '/nauczyciel/uczen-zapisany', icon:assets.home_person_tick_icon},
  ]

  return isNauczyciel && (
    <div className='md:w-64 w-16 border-r min-h-screen text=base border-gray-500
     py-2 flex flex-col'>
      {menuItems.map((item)=>{
        <NavLink>
          <img src={item.icon} alt="" className='w-6 h-6' />
          <p className='md:block hidden text-center'>{item.name}</p>
        </Navlink>
      })}
    </div>
  )
}

export default Sidebar