import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center space-y-5 text-center py-10'>
      <h1 className='text-x1 md:text-4x1 text-gray-800 font-semibold'>CallToAction</h1>
      <p className='text-gray-500 sm:text-sm'></p>
      <div className='flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0'>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Zacznij</button>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Dowiedz się więcej<img src={assets.arrow_icon} alt='arrow_icon' /></button>
    
      </div>
    </div>
  )
}

export default CallToAction