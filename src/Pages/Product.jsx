

// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Card from '../Components/Card'


// const Product = () => {
//     const[data ,setData]=useState(null)
//     const navigate =useNavigate()
//     useEffect(()=>{
//         // fetch('https://jsonplaceholder.typicode.com/users')
//         fetch('https://fakestoreapi.com/products')
//         .then(res=> res.json())
//         .then((res)=>{
//             console.log(res);
//             setData(res)
            
//         }).catch((err)=>{
//             console.log(err);
            
//         })
//     },[])
//     const singleProduct=(item)=>{
//         navigate(`/singleStudent/${item.id}`)

//     }

//   return (
//     <>
//   {/* <h1>Student data</h1> */}

//   <div><Card key={index}/></div>
//    {/* {data ? data.map((item)=>{
//     return <div key={item.id} style={{
//       border:'1px solid black',
//       margin:'30px',
//       padding:'30px'
//     }
        
//   }>
//         <h1>Title :{item.title}</h1>
          
//           <h1>category:{item.category}</h1>
//         <h1>price:{item.price}</h1>
        
        
        
//        <button onClick={()=>singleProduct(item)}>Show more</button> 
        
//         </div>
//     }):<h1>loading...</h1> }
  
//  */}


//     </>
//   )
// }

// export default Product


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card';

const Product = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                setData(res);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    const singleProduct = (item) => {
        navigate(`/singleProduct/${item.id}`);
    }

    return (
        <>
            <h1>Product List</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data ? data.map((item, index) => (
                    <Card 
                        key={item.id} 
                        src={item.image}
                        title={item.title} 
                        category={item.category} 
                        price={item.price} 
                        onShowMore={() => singleProduct(item)} 
                    />
                )) : <h1>Loading...</h1>}
            </div>
        </>
    );
}

export default Product;
