import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const CourseCard = ({course}) => {

  const {currency} = useContext(AppContext)

  return (
    <div>
      <img src={course.courseThumbnail} alt="" className='w-full h-60 object-cover rounded-lg' />
      <div>
        <h3>{course.CourseTitle}</h3>
        <p>{course.nauczyciel.name}</p>
        <div>
          <p>3.5</p>
          <div>
            {[...Array(5)].map((_, i)=>(<img key={i} src={assets.star} alt='' />
            ))}
          </div>
          <p>23</p>
        </div>
        <p>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CourseCard