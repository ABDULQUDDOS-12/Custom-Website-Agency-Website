import React,{useEffect} from 'react'
import styles from './Index.module.css'
import image from '../../images/b1.webp'
import moneyImage from '../../images/b21.png'
import clientImage from '../../images/b22.png'
import clockImage from '../../images/b23.png'
import computerImage from '../../images/b24.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
const Index = () => {
    useEffect(() => {

        AOS.init({
          duration: 1500, // Animation duration in milliseconds
          easing: 'ease-in-out', // Animation timing function
        }); // Initialize AOS
      }, []);
    return (
        <div data-aos="zoom-in-up" className={styles.mainContainer}>
            <div className={styles.leftHandContainer}>
                <div className={styles.imageContainer}>
                    <img src={image} alt="" className={styles.image} />
                </div>
            </div>
            <div className={styles.rightHandContainer}>
                <div className={styles.mainHeading}>
                    <h1>Elevate Your <span>Brand</span> & Grow <span>Professionally</span></h1>
                </div>
                <div className={styles.textContainer}>
                    <p>From the initial conceptualization Till the final delivery of the designs, We make sure each and every step is smooth Transparent & flawless.</p>
                </div>
                <div className={styles.iconsContainer}>
                    <div className={styles.firstIconContainer}>
                        <div className={styles.firstImageContainer}>
                         <img src={moneyImage} alt="" className={styles.firstImage}/>     
                        </div>
                        <div className={styles.iconText}>
                         <p>Money Back Guarantee</p>
                        </div>
                    </div>
                    <div className={styles.firstIconContainer}>
                        <div className={styles.firstImageContainer}>
                         <img src={computerImage} alt="" className={styles.firstImage}/>     
                        </div>
                        <div className={styles.iconText}>
                         <p>Client Satisfaction</p>
                        </div>
                    </div>
                    <div className={styles.firstIconContainer}>
                        <div className={styles.firstImageContainer}>
                         <img src={clientImage} alt="" className={styles.firstImage}/>     
                        </div>
                        <div className={styles.iconText}>
                         <p>24/7 Support</p>
                        </div>
                    </div>
                    <div className={styles.firstIconContainer}>
                        <div className={styles.firstImageContainer}>
                         <img src={clockImage} alt="" className={styles.firstImage}/>     
                        </div>
                        <div className={styles.iconText}>
                         <p>Unique Designs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index