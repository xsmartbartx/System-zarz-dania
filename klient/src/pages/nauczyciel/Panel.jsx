import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'

const Panel = () => {

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
            <img src={assets.patients_icon} alt="patients_icon" />
            <div>
              <p>{dashboardData.zapisanyStudenciData.length}</p>
              <p>Wszystkie zapisy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <Ładowanie />
}

export default Panel