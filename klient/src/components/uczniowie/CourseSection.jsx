import React from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'

const CourseSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center space-y-5 text-center py-10'>
      <h2 className='text-3x1 font-medium text-gray-800'>CourseSection</h2>
      <p className='text-s, md:target-base text-gray-500 mt-3'></p>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {allCourses.slice(0,3).map((course, index) =>
          <CourseCard key={index} course={course} />)}
      </div>

      <Link to={'/course-list'} onClick={() => scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Pokaż wszystkie kursy</Link>
    </div>
  )
}

export default CourseSection