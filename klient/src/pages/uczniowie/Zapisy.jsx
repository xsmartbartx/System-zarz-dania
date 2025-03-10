import React from 'react'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'

const Zapisy = () => {

  const {zapisanyCourses, calculateCourseDuration} = useContext(AppContext);

  const [progressArray, setProgressArray] = useState([
    {lectureCompleted: 4, totalLectures: 10},
    {lectureCompleted: 2, totalLectures: 8},
    {lectureCompleted: 6, totalLectures: 12},
    {lectureCompleted: 3, totalLectures: 9},
    {lectureCompleted: 5, totalLectures: 10},
    {lectureCompleted: 7, totalLectures: 15},
    {lectureCompleted: 4, totalLectures: 10},
    {lectureCompleted: 2, totalLectures: 8},
    {lectureCompleted: 6, totalLectures: 12},
    {lectureCompleted: 3, totalLectures: 9},
    {lectureCompleted: 5, totalLectures: 10},
    {lectureCompleted: 7, totalLectures: 15},
    {lectureCompleted: 4, totalLectures: 10},    
  ]);

  return (
    <>
    <div className='container mx-auto p-4'>
      <h1 className='text-2x1 font-semibold'>Zapisy</h1>
      <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
        <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
          <tr>
            <th>
              <td className='px-4 py-3 font-semibold truncate'>Kurs</td>
              <td className='px-4 py-3 font-semibold truncate'>Czas trwania</td>
              <td className='px-4 py-3 font-semibold truncate'>Zakończone</td>
              <td className='px-4 py-3 font-semibold truncate'>Status</td>
            </th>
          </tr>
        </thead>
        <tbody>
          {zapisanyCourses.map((course, index) => (
            <tr key={index} className='border-b border-gray-200'>
              <td>
                <img src={course.courseThumbnail} alt="" className='w-14 sm:w-24 md:w-28' />
                <div>
                  <p>{course.courseTytuł}</p>
                </div>
              </td>
              <td>
                {calculateCourseDuration(course)}
              </td>
              <td>
                4 / 10 <span>Wykłady</span>
              </td>
              <td>
                <button>Zakończony</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Zapisy