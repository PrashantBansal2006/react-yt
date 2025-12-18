import React from 'react'
import styles from './header.module.css'

const header = () => {
  return (
    <div className={styles.header}>
      This is header
      <button>login</button>
    </div>
  )
}

export default header
