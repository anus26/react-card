import React from 'react'
import {Link} from 'react-router-dom'
const Navabar = () => {
  return (
    <>
    <div style={{
        display:'flex',
        justifyContent:'center'
    }}>
           <Link to="">Home</Link>
        <Link to="product">Product</Link>
        <Link to="contact">Contact</Link>
        <Link to="service">Service</Link>
    </div>
    </>
  )
}

export default Navabar
