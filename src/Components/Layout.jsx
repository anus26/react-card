import React from 'react'
import Navabar from './Navabar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   
    <Navabar/>
    <Outlet/>
   </>
  )
}

export default Layout