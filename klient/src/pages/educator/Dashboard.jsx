import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'

const Dashboard = () => {

  const { currency } = useContext(AppContext)
  const [dashboardData, setDashboardData] = useState(null)

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData)
  }

  useEffect(() => {
    fetchDashboardData()
  },[])

  return dashboardData ? (
    <div>
      <div>
        <div>
          <div>
            <img src={assets.appointments_icon} alt="appointments_icon" />
            <div>
              <p>{dashboardData.totalCourses}</p>
              <p>Wszystkie kursy</p>
            </div>
          </div>
          <div>
            <img src={assets.earning_icon} alt="earning_icon" />
            <div>
              <p>{currency}{dashboardData.totalEarnings}</p>
              <p>Wszystkie zapisy</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className='pb-4 text-lg font-medium'>Ostatnie zapisy</h2>
          <div className='flex flex-col items-center max-w-4x1 w-full overflow-hidden
           rounded-md bg-white border border-gray-500/20'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nazwa Ucznia</th>
                <th>Nazwa Kursu</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.enrolledStudentsData.map((item, index) => (
                <tr key={index}></tr>
                <td>{index +1}</td>
                <td>
                  <img src={item.student.imageUrl} alt="Profil" />
                  <span>{item.student.name}</span>
                </td>
                <td>{item.courseTitle}</td>
              ))}
            </tbody>
          </table>

          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  ) : <Loading />
}

export default Dashboard