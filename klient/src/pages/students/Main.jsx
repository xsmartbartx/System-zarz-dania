import React from 'react'
import Hero from '../../components/uczniowie/Hero'
import Companies from '../../components/uczniowie/Companies'
import CourseSection from '../../components/uczniowie/CourseSection'
import Refferentials from '../../components/uczniowie/Referencje'
import CallToAction from '../../components/uczniowie/CallToAction'
import Footer from '../../components/uczniowie/Footer'

const Main = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CourseSection />
      <Refferentials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Main