import React from 'react'
import Cart from './Cart'
import ShoeList from './ShoeList'

function HomeShoeShop() {
   return (
      <div className='container my-5'>
         <h1 className='text-center'>Shoe Shop</h1>
         <ShoeList></ShoeList>   
         <Cart></Cart>
      </div>
   )
}

export default HomeShoeShop
