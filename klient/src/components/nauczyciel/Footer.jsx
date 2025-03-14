import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
      <Footer className='flex md:flex-row flex-col-reverse items-center justify-between'>
        <div>
          <img className='hidden md:block w-20' src={assets.logo} alt="logo" />
            <div className='hidden md:block h-7 w-px'></div>
            <p className='py-4 text-center text-xs'>MiejskiSurfer made this</p>
        </div>
        <div>
          <a href="#">
            <img src={assets.facebook_icon} alt="facebook_icon" />
          </a>
          <a href="#">
            <img src={assets.twitter_icon} alt="twitter_icon" />
          </a>
          <a href="#">
            <img src={assets.instagram_icon} alt="instagram_icon" />
          </a>
        </div>
      </Footer>
    </div>
  )
}

export default Footer