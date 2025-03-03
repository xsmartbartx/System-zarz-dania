import React, { use, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import SearchBar from '../../components/uczniowie/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/uczniowie/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/uczniowie/Footer'


const CoursesList = () => {

  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()

      input ?
        setFilteredCourse(tempCourses.filter(
          item => item.course.title.toLowerCase().includes(input.toLowerCase()))) :
        
       setFilteredCourse(tempCourses)
    }
  }, [allCourses, input]);

  return (
    <>
    <div className='flex flex-col items-center space-y-5 text-center py-10'>
      <div className='flex flex-col items-center space-y-5 text-center py-10'>
        <div>
          <h1 className='text-4x1 font-semibold text-gray-800'>CourseList</h1>
          <p className='text-gray-500'>
            <span className='text-gray-600 cursor-pointer' onClick={()=> navigate('/')}>
              Główna</span> / <span>Lista Kursów</span></p>
        </div>
        <SearchBar data={input} />
      </div>
      { input && <div className='flex items-center gap-5'>
        <p>{input}</p>
        <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={()=> navigate('/course-list')}></img>
        </div>}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {filteredCourse.map((course, index) => <CourseCard key={index} course={course} />)}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default CoursesList