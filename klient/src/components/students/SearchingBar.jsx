import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const SearchingBar = (data) => {

  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')

  const onSearchHandler = (e) => {
    e.preventDefault()
    navigate(`/course-list?search=${input}`)
  }

  return (
    <div>
      <form className='flex items-center gap-3'>
        <img src={assets.search_icon} alt="search_icon" className='md:w-auto w-10 px-3' />
        <input onChange={e=> setInput(e.target.value)} value={input} type="text" placeholder='Wyszukaj kurs' className='w-80 md:w-96 h-10 border border-gray-300 rounded-full px-5' />
        <button type='submit' className='bg-blue-600 text-white px-5 py-2 rounded-full'>Szukaj</button>
      
      </form>
    </div>
  )
}

export default SearchingBar