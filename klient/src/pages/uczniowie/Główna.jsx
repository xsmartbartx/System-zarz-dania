import React from 'react'
import Hero from '../../components/uczniowie/Hero'
import Companies from '../../components/uczniowie/Companies'
import CourseSection from '../../components/uczniowie/CourseSection'
import Referencje from '../../components/uczniowie/Referencje'
import CallToAction from '../../components/uczniowie/CallToAction'

const Główna = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CourseSection />
      <Referencje />
      <CallToAction />
    </div>
  )
}

export default Główna