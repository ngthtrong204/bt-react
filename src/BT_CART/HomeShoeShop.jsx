import React, { useState } from 'react'
import Cart from './Cart'
import ShoeList from './ShoeList'

function HomeShoeShop() {
   const [isOpen, setIsOpen] = useState(false)
   const [itemsInCart, setItemsInCart] = useState([])

   const handleAddToCart = (item) => {
      const index = itemsInCart.findIndex((shoe) => shoe.id === item.id)
      if (index === -1) {
         setItemsInCart([...itemsInCart, { ...item, quantity: 1 }])
      } else {
         const newCarts = [...itemsInCart]
         newCarts[index].quantity += 1
         setItemsInCart(newCarts)
      }
   }
   const handleDeleteItem = (id) => {
      const newCarts = itemsInCart.filter((item) => item.id !== id)
      setItemsInCart(newCarts)
   }

   const handleChangeQuantity = (id, value) => {
      const index = itemsInCart.findIndex((item) => item.id === id)
      const newCarts = [...itemsInCart]
      newCarts[index].quantity += value
      if(!newCarts[index].quantity){
         handleDeleteItem(id)
         return
      }
      setItemsInCart(newCarts)
   }

   const total = itemsInCart.reduce((result,item)=>{
      return result +=item.quantity
   },0)


   return (
      <div className='container my-5 ' >
         <h1 className='text-center fw-bold'>SHOE SHOP</h1>
         <div className="text-end">
            <button
               onClick={() => setIsOpen(true)}
               className=' btn btn-danger px-4 py-3 mb-5 me-5'>
               Cart {total?`(${total})`:""}
            </button>
         </div>
         <Cart
            onChangeValue={handleChangeQuantity}
            onDeleteItem={handleDeleteItem}
            itemsInCart={itemsInCart}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}>

         </Cart>
         <ShoeList
            onAddToCart={handleAddToCart}>
         </ShoeList>
      </div>
   )
}

export default HomeShoeShop
