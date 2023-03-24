import React from 'react'
import data from "./data.json"

function ShoeItem({onAddToCart}) {


   return (
      <div className='row'>
         {data.map((item) => {
            return (
               <div className="col-sm-4 mb-5 px-5" key={item.id}>
                  <div className="card">
                     <div className="card-head mt-5 text-center text-nowrap ">
                        <h3>{item.name}</h3>
                     </div>
                     <div className="card-body">
                        <img src={item.image} height="270px" width='270px' alt={item.name}/>
                        <p>{item.shortDescription}</p>
                        <div className='d-flex justify-content-between align-item-center'>
                           <h2 className='ms-1 my-0'>{item.price}$</h2>
                           <button className='btn btn-primary' onClick={()=>onAddToCart(item)} >Add to cart</button>
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default ShoeItem