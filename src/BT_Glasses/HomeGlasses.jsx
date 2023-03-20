import React, { useState } from 'react'
import GlassList from './GlassList'
import Model from './Model'
import styles from './main.module.scss'

function HomeGlasses() {
  const [item, setItem] = useState("")
  const handleChangeData = (item) => {
    setItem(item)
  }

  return (
    <div className={styles.home}>
      <Model item={item}></Model>
      <GlassList onChangeData={handleChangeData} ></GlassList>
    </div>
  )
}

export default HomeGlasses