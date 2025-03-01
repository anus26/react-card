// import React from 'react'

// const Card=(title,src) => {
//   return (
    
    
//     <>
//     <div  className='card'>
//         <div className='card-header'>
//             <h1>{title}</h1>
//         </div>
//         <div className='card-body'>
//             <figure><img src={src} alt="" /></figure>
//             <button className='btn'>show more</button>
//         </div>

//     </div>
//     </>
//   )
// }

// export default Card




import React from 'react';

const Card = ({ title, category, price, onShowMore,src }) => {
  return (
    <div className='card' style={{ border: '1px solid #ccc', margin: '10px', padding: '20px', maxWidth: '200px' }}>
        <figure ><img className='image' src={src} alt="" /></figure>
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <button onClick={onShowMore}>Show more</button>
    </div>
  );
};

export default Card;


