import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Ładowanie from '../../components/Ładowanie'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'

const CourseDetails = () => {

  const {id} = useParams();

  const [courseData, setCourseData] = useState(null);
  const [openSections, setopenSections] = useState({});


  const {allCourses, calculateRating, calculateChapterTime,
    calculateNoOfLectures, calculateCourseDuration, currency} = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find(course => course._id === id)
    setCourseData(findCourse);
  }

  useEffect(() => {
    fetchCourseData();
  }, []);

  const toggleSection = (index) => {
    setopenSections((prev)=>({...prev, [index]: !prev[index],
    }));
  };

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
                <div className='flex justify-between items-center' onClick={()=>toggleSection(index)}>
                  <div className='flex items-center space-x-2'>
                    <img src={assets.down_arrow_icon} alt='arrow icon' className='w-5 h-5'/>
                    <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                  </div>
                  <p className='font-medium md:text-base text-sm'>{chapter.chapterContent.length} lectures - 
                    {calculateChapterTime(chapter)}</p>
                </div>

                <div className={`mt-4 ${openSections[index] ? 'block' : 'hidden'}`}>
                  <ul className='list-disc list-inside'>
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i} className='flex items-center space-x-2'>
                        <img className={`transform transition-transform ${openSections[index] ? 'block' : 'hidden'}`} src={assets.play_icon} alt='play icon' className='w-5 h-5'/>
                        <div>
                          <p className='text-sm'>{lecture.lectureTitle}</p>
                          <div>
                            {lecture.isPreviewFree && <p>Podgląd</p>}
                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, {units: ['g', 'm']})}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
      </div>

        <div className='container mx-auto p-4'>
          <h3 className='text-x1 font-semibold text-gray-800'>Opis Kursu</h3>
          <p className='pt-4 md:text-bsae text-sm'
          dangerouslySetInnerHTML={{__html: courseData.courseDescription}}></p>
        </div>
      </div>

      <div className='max-w-course-card z-10 shadow-custom-card roundfed-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] xl:min-w-[420px]'>
        <img src={courseData.courseTumbnail} alt=""/>
        <div className='container mx-auto p-4'>
          <div>
            <img src={assets.time_left_clock_icon} alt="time_left_clock_icon" />
            <p className='text-red-500'>Zostało <span className='font-medium'>5 dni</span> w tej cenie!</p>
          </div>
      </div>

      <div className='flex gap-3 itmes-center pt-2'>
          <p className='text-gray-800 md:text-4x1 text-2x1 font-semibold'>{currency}{(courseData.coursePrice - courseData.discount * 
            courseData.coursePrice /100).toFixed(2)}</p>
            <p className='md:text-lg text-gray-500 line-through'>{currency}
              {courseData.coursePrice}</p>
            <p className='md:text-lg text-gray-500'>{courseData.discount}% off</p>
      </div>

      <div className='container mx-auto p-4'>
        <div className='flex items-center space-x-2'>
          <img src={assets.star} alt="star icon" />
          <p>{calculateRating(courseData)}</p>
        </div>

        <div className='h-4 w-px bg-gray-500/40'></div>

        <div className='flex items-center gap-1'>
          <img src={assets.time_clock_icon} alt="clock icon" />
          <p>{calculateRating(courseData)}</p>
        </div>

      </div>

  </div>
    </>
  ) : <Ładowanie />;
}

export default CourseDetails