import React from 'react'
import NavabarLink from './NavabarLink.jsx'
import NavabarBtn from './NavabarBtn'
import NavabarLogo from '../NavabarLogo.jsx'

const NavabarMain = () => {
  return (

    <nav className='w-full fixed top-0 left-0  z-20 bg-black'>
        <div className='flex justify-between items-center max-w-[1100px]  mx-auto px-6 py-6 rounded-full border border-cyan'>
        <NavabarLogo/> 

        <div>

        <NavabarLink/>
        </div>
        <NavabarBtn/>
        </div>
    </nav>
  )
}

export default NavabarMain