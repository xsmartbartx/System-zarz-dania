import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Ładowanie from '../../components/Ładowanie'
import { assets } from '../../assets/assets'

const CourseDetails = () => {

  const {id} = useParams();

  const [courseData, setCourseData] = useState(null);

  const {allCourses, calculateRating} = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find(course => course._id === id)
    setCourseData(findCourse);
  }

  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
    <div className='course-details'>
      
      <div className='absolute top-0 left-0 w-full h-section-height'></div>

      <div className='container mx-auto p-4 text-gray-500'>
        <h1 className='md:text-course-details-heading-large
         text-course-details-heading-small font-semibold text-gray-800'>
          {courseData.courseTitle}</h1>
        <p className='text-sm md:text-base mt-4'
         dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice(0,200)}}></p>
      
              <div className='flex items-center space-x-2'>
                <p>{calculateRating(courseData)}</p>
                <div className='flex space-x-1'>
                  {[...Array(5)].map((_, i)=>(<img key={i} src={i 
                  <Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank }
                   alt='' className='w-3.5 h-3.5'/>
                  ))}
                </div>
                <p className='text-gray-500'>{courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'}</p>
              </div>
      
              <p>{courseData.zapisaniUczniowie.length} {courseData.zapisaniUczniowie.length
              > 1 ? 'uczniowie': 'uczeń'}</p>

      <p className='text-sm'>Kurs zrobiony przez:<span className='text-blue-underline'>MiejskiSurfer</span></p>
      
      <div className='container mx-auto p-4'>
          <h2 className='text-lg font-semibold text-gray-800'>Co znajdziesz w kursie?</h2>

          <div className='flex flex-col space-y-4 mt-4'>
            {courseData.courseContent.map((chapter, index) => (
              <div key={index} className='border border-gray-200 rounded-lg p-4'>
                <div>
                  <div>
                    <img src={assets.down_arrow_icon} alt='arrow icon' className='w-5 h-5'/>
                  </div>
                </div>
              </div>
            ))}
          </div>

      </div>

      <div></div>

    </div>
    </>
  ) : <Ładowanie />;
}

export default CourseDetails