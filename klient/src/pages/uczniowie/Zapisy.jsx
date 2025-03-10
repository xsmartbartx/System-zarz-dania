import React from 'react'

const Zapisy = () => {
  return (
    <div>
      <h1>Zapisy</h1>
      <table>
        <thead>
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
  )
}

export default Zapisy