import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {

  const {currency, calculateRating} = useContext(AppContext)

  return (
    <Link to={'/course/' + course.id} onClick={()=> scrollTo(0,0,)} className='flex flex-col items-center space-y-3 text-center border border-gray-200 rounded-lg p-5'>
      <img className='w-full h-60 object-cover rounded-lg' src={course.courseThumbnail} alt="" />
      <div className='flex flex-col items-center space-y-2'>
        <h3 className='text-base font-semibold'>{course.CourseTitle}</h3>
        <p className='text-gray-500'>{course.nauczyciel.name}</p>
        <div className='flex items-center space-x-2'>
          <p>3.5</p>
          <div className='flex space-x-1'>
            {[...Array(5)].map((_, i)=>(<img key={i} src={i <Math.floor(calculateRating(course)) ? assets.star : assets.star_blank } alt='' className='w-3.5 h-3.5'/>
            ))}
          </div>
          <p className='text-gray-500'>{course.courseRatings.length}</p>
        </div>
        <p className='text-base font-semibold text-gray-800'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default CourseCard