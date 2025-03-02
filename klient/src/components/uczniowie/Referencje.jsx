import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const Referencje = () => {
  return (
    <div className='flex flex-col items-center space-y-5 text-center py-10'>
      <h2 className='text-3x1 font-medium text-gray-800'>Referencje</h2>
      <p className='md:text-base text-gray-500 mt-3'></p>
      <div>
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className='flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0'>
            <div className='flex flex-col items-center space-y-5'>
              <img src={testimonial
                .image} alt={testimonial.name} className='w-20 h-20 rounded-full' />
              <div className=''>
                <h1>{testimonial.name}</h1>
                <p>{testimonial.role}</p>
              </div>
              <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <img className='w-5 h-5' key={i} src={i <Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt='star' />
                  ))}
                </div>
                <p className='text-grfay-500 mt-5'>{testimonial.feedback}</p>
            </div>
            <a href='#' className='text-blue-600'>Zobacz więcej</a>
            </div>
      </div>
        ))}
    </div>
    
    </div>
)}

export default Referencje