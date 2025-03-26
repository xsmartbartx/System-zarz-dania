import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets';
import { UserButton, userButton, useUser } from '@clerk/clerk-react';
import { Link } from  'react-router-dom';

const Navbar = () => {
  const NauczycielData = dummyEducatorData
  const { user } = useUser()

  return (
    <div>
      <Link to='/'>
      <img src={assets.logo} alt="Logo" className='w-28 lg:w-32' />
      </Link>
      <div className='flex items-center gap-5'>
        <p>Yo! {user ? user.fullName : 'Developers'}</p>
        {user ? <UserButton /> : <img className='max-w-8' src={assets.profile_img} />}
      </div>
    </div>
  )
}

export default Navbar