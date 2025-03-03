import React from 'react'
import {Link} from 'react-router-dom'




const NavabarLink = () => {
    const pages=['home','contact','product','service']
  return (
    <div >
        <ul className='felx justify-between lg:flex-row sm:flex-col text-white  gap-6 font-body lg:relative sm:absolute  sm:top-120% text-center left-50% lg:text-md sm:text-xl sm:bg-cyan/30 backdrop:blur-lg  lg:bg-black sm:w-full py-4'>
      {pages.map((page)=>{
        return(
        <li key={page} className='group'>
        <Link  className='cursor-pointer text-white hover:text-cyan trasition-all duration-500'
        to={`/${page}`}>
            {page}
        </Link>
        <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
        </li>
        )
      })

      }
        
        </ul>
        </div>
  )
}

export default NavabarLink