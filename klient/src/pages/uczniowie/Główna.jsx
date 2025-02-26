import React from 'react'
import Hero from '../../components/uczniowie/Hero'
import Companies from '../../components/uczniowie/Companies'

const Główna = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
    </div>
  )
}

export default Główna