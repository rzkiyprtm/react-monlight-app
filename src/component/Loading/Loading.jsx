import React from 'react'
import styles from '../Loading/Loading.module.css'

function Loading() {
  return (
    <div className={styles["loader-container"]}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export default Loading