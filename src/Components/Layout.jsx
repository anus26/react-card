import React from 'react'
import { Outlet } from 'react-router-dom'
import NavabarMain from './navabarsection/NavabarMain'

const Layout = () => {
  return (
   <>
   
    <NavabarMain/>
    <Outlet/>
   </>
  )
}

export default Layout