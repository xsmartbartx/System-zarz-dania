import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center space-y-5 text-center py-10'>
      <div className='flex flex-col items-center space-y-5'>
        <div className='flex items-center gap-5'>
          <img src={assets.logo_dark} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
          <p className='mt-6 text-center md:text-lefty text-sm text-white/80'></p>
        </div>
        <div className='flex items-center gap-5'>
          <h2 className='font-semibold text-white mb-5'>Firma</h2>
          <ul className='flex flex-col items-center gap-2'>
            <li><a href='#'>Główna</a></li>
            <li><a href='#'>O nas</a></li>
            <li><a href='#'>Skontaktuj się</a></li>
            <li><a href='#'>Regulamin użytkowania</a></li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-center gap-5'>
          <h2 className='font-semibold text-white mb-5'>Kliknij po Newsletter</h2>
          <p className='text-sm text-white/80'></p>
        </div>
          <input type='email' placeholder='Wpisz swój email' className='bg-gray-800 text-white px-5 py-2 rounded-full' />
          <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Zapisz się</button>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'></p>
    </footer>
  )
}

export default Footer