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
        <NavLink
        to={item.path}
        key={item.name}
        end={item.path === '/nauczyciel'}
        className={({isActive})=> `flex items-center md:flex-row flex-col
         md:justify-start justify-center py-3.5 md:px-10 gap-3 ${isActive ?
          'bg-indigo-50 border-r-[6px] border-indigo-500/90' :
           'hover:bg-gray-100/90 border-r-[6px] border-white hover:border-gray'}`}>
          <img src={item.icon} alt="" className='w-6 h-6' />
          <p className='md:block hidden text-center'>{item.name}</p>
        </Navlink>
      })}
    </div>
  )
}

export default Sidebar