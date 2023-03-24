import React from 'react'
import ShoeItem from './ShoeItem'

function ShoeList({onAddToCart}) {

   const handleAddToCard = (item) =>{
      onAddToCart(item)
   }


   return (
      <div className='container'>
         <ShoeItem   onAddToCart={handleAddToCard}></ShoeItem>
      </div>
   )
}

export default ShoeList