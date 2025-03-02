import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div>
      <h1>CallToAction</h1>
      <p></p>
      <div>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Zacznij</button>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Dowiedz się więcej<img src={assets.arrow_icon} alt='arrow_icon' /></button>
    
      </div>
    </div>
  )
}

export default CallToAction