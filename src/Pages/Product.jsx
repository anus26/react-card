 import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const[data ,setData]=useState(null)
    const navigate =useNavigate()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then((res)=>{
            console.log(res);
            setData(res)
            
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])
    const singleUser=(item)=>{
        navigate(`/singleUser/${item.id}`)

    }
  return (
    <>
  <h1>Student data</h1>
  {data ? data.map((item)=>{
        return <div key={item.id} style={{
            border:'1px solid black',
            margin:'30px',
            padding:'30px'
        }
        
        }><h1>Name:{item.name}</h1>
        <h1>Email:{item.email}</h1>
        <h2>phone :{item.phone}</h2>
        
       <button onClick={()=>singleUser(item)}>Show more</button> 
        
        </div>
    }):<h1>loading...</h1>
  }



    </>
  )
}

export default Product