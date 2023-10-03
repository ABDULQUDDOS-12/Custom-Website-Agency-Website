import React from 'react'
import styles from './Index.module.css'
import logo from '../../images/logo.png'
const Index = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="" className={styles.logoImage} />
                </div>
                <div className={styles.textContainer}>
                    <p>We build website and create unlimited pathways for the brand to capture leads and enjoy unexpected conversions.</p>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>© Custom Website Agency. ALL RIGHTS RESERVED. | A Krazy Design Labs Company</p>
            </div>
        </div>
    )
}

export default Index