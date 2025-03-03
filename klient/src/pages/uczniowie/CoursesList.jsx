import React from 'react'

const CoursesList = () => {

  const { navigate } = useContext(AppContext);

  return (
    <>
    <div>
      <div>
        <div>
          <h1>CourseList</h1>
          <p className='text-gray-500'>
            <span className='text-gray-600 cursor-pointer' onClick={()=> navigate('/')}>
              Główna</span> / <span>Lista Kursów</span></p>
        </div>

      </div>
    </div>
    </>
  )
}

export default CoursesList