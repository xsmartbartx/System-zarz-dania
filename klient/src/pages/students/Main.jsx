import React from 'react'
import Hero from '../../components/students/Hero'
import Companies from '../../components/students/Companies'
import CourseSection from '../../components/students/CourseSection'
import Referentials from '../../components/students/Referentials'
import CallToAction from '../../components/students/CallToAction'
import Footer from '../../components/students/Footer'

const Main = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CourseSection />
      <Referentials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Main