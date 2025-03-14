import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../../context/AppContext'
import { dummyDashboardData } from '../../assets/assets'

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
    <div></div>
  ) : <Ładowanie />
}

export default Panel