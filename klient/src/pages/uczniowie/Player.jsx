import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import YouTube from 'react-youtube'
import Footer from '../../components/Footer'
import Rating from '../../components/uczniowie/Rating'


const Player = () => {

  const {zapisanyCourses, calculateChapterTime} = useContext(AppContext);
  const {courseId} = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);

  const getCourseData = () => {
    zapisanyCourses.map(course => {
      if (course._id === courseId) {
        setCourseData(course);
      }
    });
  }

  useEffect(() => {
    fetchCourseData();
  }, [zapisanyCourses]);
  
  const toggleSection = (index) => {
    setopenSections((prev)=>({...prev, [index]: !prev[index],
    }));
  };

  return (
<>
    
      <div className='container mx-auto p-4'>
        <h2 className='text-x1 font-semibold'>Osoba</h2>

        <div className='container mx-auto p-4'>
                  <h2 className='text-lg font-semibold text-gray-800'>Co znajdziesz w kursie?</h2>
        
                  <div className='flex flex-col space-y-4 mt-4'>
                    {courseData && courseData.courseContent.map((chapter, index) => (
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
                                <img className={`transform transition-transform ${openSections[index] ?
                                   'block' : 'hidden'}`} src={false ? assets.blue_tick_icon : assets.play_icon} alt='play icon' />
                                <div>
                                  <p className='text-sm'>{lecture.lectureTitle}</p>
                                  <div className='flex items-center space-x-2'>
                                    {lecture.lectureUrl && <p onClick={()=> 
                                      setPlayerData({...lecture, chapter: index +1, lecture: i + 1})}
                                      >Podgląd</p>}
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
                  <div className='container mx-auto p-4'>
                    <h1 className='text-x1 font-bold'>Oceń ten kurs</h1>
                    <Rating initialRating={0} />
                  </div>
              </div>

        <div className='md:10-auto p-4'>
          {playerData ? (
            <div>
              <YouTube videoId={playerData.lectureUrl.split('/').pop()}
                iframeClassName='ww-full aspect-video'/>
              <div>
                <p>{playerData.chapter}.{playerData.lecture} 
                  {playerData.lectureTitle}</p>
                <button className='text=blue-600'>{false ? 'Ukończone' : 'Zaznacz jako zaliczone'}}</button>
              </div>
            </div>
          )
          :
          <img src={courseData ? courseData.courseThumbnail : ''} alt="" />
            }
        </div>
    </div>
    <Footer />
</>
  )
}

export default Player