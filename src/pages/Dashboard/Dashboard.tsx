import React from 'react'
import Sidebar from '../../components/modules/Dashboard/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {

  return (
    <div className='flex min-h-screen '>
      
      <Sidebar/>
      <div className='grow bg-neutral-tertiary relative overflow-hidden z-10'>
        <img src="/public/images/ellipse.png" alt="ellipse"  className='absolute left-[-280px] top-[-140px] rotate-180 -z-10'/>
        <img src="/public/images/ellipse.png" alt="ellipse"  className='absolute right-[-280px] bottom-[-110px]  -z-10'/>
      <Outlet/>
      </div>

    </div>
  )
}

export default Dashboard