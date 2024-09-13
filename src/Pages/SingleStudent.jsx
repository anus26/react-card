import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleStudent = () => {
    const[data,setData]=useState(null)
    const {id}=useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            setData(res)
        }).catch((err)=>{
            console.log(err);
            
        })
    },[id])
  return (
    <>
    <h1>SingleStudent {id}</h1>
<h1>{data ? data.name: "Loading..."}</h1> 
   
    </>
  )
}

export default SingleStudent