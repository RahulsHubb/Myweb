import React from 'react'

const soonReached = (ProductCard) => {
  return (props)=>{
    return(
        <>
            <p className='absolute p-1 left-6 top-3  bg-black rounded text-white z-20'>Soon</p>
            <ProductCard {...props}/>
        </>
    )
  }
}

export default soonReached