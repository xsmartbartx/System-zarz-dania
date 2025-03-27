import React from 'react'
import { assets } from '../../assets/assets'
import SearchingBar from '../SearchingBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 sapce-y-7 text-center bg-gradient-to-b fraom-cyan-100/70'>
      <h1 className='md: text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3x1 mx-auto'>Corses from fields related to
      <span className='text-blue-600'>IT</span><img src={assets.sketch} alt="sketch"
      className='md:block hidden absolute -bottom-7 right-0'/></h1>

      <p className='md:block hidden text-gray-500 max-w-2x1 mx-auto'></p>

      <p className='md:block hidden text-gray-500 max-w-2x1 mx-auto'></p>
      <SearchingBar />
    </div>
  )
}

export default Hero