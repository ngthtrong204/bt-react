import React from 'react'

function Cart({ isOpen, onClose, itemsInCart ,onDeleteItem,onChangeValue}) {

  if (!isOpen) {
    return null
  }


  return (
    <>
      <div className="modal show fade" style={{ display: "block" }} tabIndex={-1} >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">CART</h1>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {itemsInCart.map((item) => {
                    return (
                      <tr key={item.id} >
                        <td >{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img src={item.image} alt={item.name} width='90px' height="90px" />
                        </td>
                        <td>{item.price}</td>
                        <td>
                          <button className='btn btn-danger mx-2'onClick={()=>onChangeValue(item.id,-1)}>-</button>
                          <span>{item.quantity}</span>
                          <button className='btn btn-danger mx-2' onClick={()=>onChangeValue(item.id,1)}>+</button>
                        </td>
                        <td>{item.quantity*item.price}</td>
                        <td>
                          <button className='btn btn-danger'onClick={()=>onDeleteItem(item.id)}>Delete</button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>



            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" onClick={()=>alert(itemsInCart.reduce((result,item)=>result+=(item.price*item.quantity),0))}>Tỉnh tổng</button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />

    </>
  )
}

export default Cart