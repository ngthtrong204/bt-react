import React from 'react'
import styles from './main.module.scss'


function Model({item}) {
  return (
    <div className={styles.model}>
      <div className={styles.modelImg} >
        <img src="./glassesImage/model.jpg" className='w-100' alt="" />
        <img className={` ${styles.modelGlass}`} src={item.url} alt="" />
      </div>
      <div className={styles.detail}>
        <table className='table'>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>  {item.name}</td>
            </tr>
            <tr>
              <th>Price:</th>
              <td>{item.price}$</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>{item.desc} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Model