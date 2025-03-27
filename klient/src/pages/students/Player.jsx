import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import YouTube from 'react-youtube'
import Footer from '../../components/Footer'
import Rating from '../../components/students/Rating'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../../components/Loading'

const Player = () => {

  const {enrolledCourses, calculateChapterTime, backendUrl, getToken, userData,
    fetchUserEnrolledCourses } = useContext(AppContext)
  
  const {courseId} = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [progressData, setProgressData] = useState(null)
  const [initialRating, setInitialRating] = useState(0)

  const getCourseData = () => {
    const course = enrolledCourses.find(course => course._id === courseId);
    if (course) {
      setCourseData(course);
      const userRating = course.courseRatings.find(item => item.userId === userData._id);
      if (userRating) {
        setInitialRating(userRating.rating);
      }
    }
  };
  
  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    if (enrolledCourses.length > 0) {
      getCourseData();
      getCourseProgress();
    }
  }, [enrolledCourses, userData._id, courseId]);

  const markLectureAsCompleted = async (lectureId) => {
    try {
      const token = await getToken()
      const { data } = await axios.post(
        backendUrl + '/api/user/update-course-progress',
        { courseId, lectureId },
        { headers: { Authorization: `Bearer ${token}` }}
      )

      if (data.success) {
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getCourseProgress = async ()=> {
    try {
      const token = await getToken()
      const { data } = await axios.post(backendUrl + '/api/user/get-course-progress',
        {courseId}, { headers: { Authorization: `Bearer ${token}`}})

        if (data.success){
          setProgressData(data.progress);
        }else{
          toast.error(data.message)
        }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleRate = async (rating)=> {
    try {
      const token = await getToken()
      const { data } = await axios.post(backendUrl + '/api/user/add-rating',
        {courseId, rating}, {headers: { Authorization: `Bearer ${token}` }})

        if (data.success) {
          toast.success(data.message)
          fetchUserEnrolledCourses()
        }else{
          toast.error(data.message)
        }
    } catch (error) {
      toast.error(error.message)
    }
  }

   useEffect(()=>{

   },[])

  return courseData ? (
<>
    <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
      <h2 className='text-lg font-semibold text-gray-800'>Co znajdziesz w kursie?</h2>

      <div className='flex flex-col space-y-4 mt-4'>
        { courseData && courseData.courseContent.map((chapter, index) => (
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
                  <img className={`transform transition-transform ${openSections[index]
                   ? 'block' : 'hidden'}`} src={progressData && progressData.
                    lectureCompleted.includes(lecture.lectureId) ? assets.blue_tick_icon :
                    assets.play_icon} alt='play icon' />
                    <div>
                      <p className='text-sm'>{lecture.lectureTitle}</p>
                        <div className='flex items-center space-x-2'>
                          {lecture.lectureUrl && <p
                           onClick={()=> setPlayerData({
                            ...lecture, chapter: index +1, lecture: i + 1
                          })}
                          className='text-blue-500 cursor-pointer'>Oglądaj</p>}
                          <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000,
                           {units: ['g', 'm']})}</p>
                        </div>
                      </div>
                </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className='container mx-auto p-4'>
        <h1 className='text-x1 font-bold'>Oceń ten kurs</h1>
          <Rating initialRating={initialRating} onRate={handleRate} />
      </div>
    </div>

    <div className='md:10-auto p-4'>
      {playerData ? (
      <div>
        <YouTube videoId={playerData.lectureUrl.split('/').pop()}
          iframeClassName='w-full aspect-video'/>
        <div>
          <p>{playerData.chapter}.{playerData.lecture} 
            {playerData.lectureTitle}</p>
            <button onClick={() => markLectureAsCompleted(playerData.lectureId)}
             className='text-blue-600'>
              {progressData && progressData.lectureCompleted.includes(playerData.lectureId) 
                ? 'Ukończone' 
                : 'Zaznacz jako zaliczone'}
            </button>
        </div>
      </div>
      )
      :
      <img src={courseData ? courseData.courseThumbnail : ''} alt="" />
      }
    </div>
  
  <Footer />

</>
  ) : <Loading />
}

export default Player