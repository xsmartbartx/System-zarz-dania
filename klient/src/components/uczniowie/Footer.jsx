import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center space-y-5 text-center py-10'>
      <div className='flex flex-col items-center space-y-5'>
        <div className='flex items-center gap-5'>
          <img src={assets.logo_dark} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
          <p></p>
        </div>
        <div></div>
        <div></div>
      </div>
      <p></p>
    </footer>
  )
}

export default Footer