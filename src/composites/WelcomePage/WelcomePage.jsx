import React from 'react'
import { HeaderSeparator, Button } from '../../components'

import styles from './styles.module.css'

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.separatorContainer}>
        <HeaderSeparator />
        <p className={styles.textName}>Deelaksha &amp; Sowmya</p>
        <HeaderSeparator />
      </div>
      <p className={styles.invitationText}>
        We are getting married, and we want you <br /> to be part of our special
        day
      </p>
      <p className={styles.invitationDate}>Saturday, 22nd FEB 2026</p>
      <div className={styles.buttonContainer}>
        <Button text="Save the Date!" />
      </div>
    </div>
  )
}

export default WelcomePage
