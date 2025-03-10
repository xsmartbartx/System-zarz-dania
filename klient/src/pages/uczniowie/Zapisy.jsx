import React from 'react'

const Zapisy = () => {
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
      </table>
    </div>
    </>
  )
}

export default Zapisy