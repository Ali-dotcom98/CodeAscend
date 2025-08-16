import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Sidebar  from '../../Pages/Students/Components/SideBar'
import SideBar from '../../Pages/Students/Components/SideBar'


const DefaultLayout_INS = () => {
  return (
    <div className='flex min-h-screen'>
         <div className='w-[20%] border'>
          <SideBar/>
        </div>
        <div className='w-[80%]'>
          <NavBar/>
          <div className='m-4 px-3'><Outlet/></div>
        </div>
    </div>
    
  )
}

export default DefaultLayout_INS