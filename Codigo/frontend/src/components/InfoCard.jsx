import React, { Children } from 'react'
import styles from './InfoCard.module.css'

const InfoCard = ( {title, children} ) => {
  return (
    <div className={styles.infoCard}>
        <h2>{title}</h2>
        <p>{children}</p>
    </div>
  )
}

export default InfoCard