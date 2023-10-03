import React, { useEffect } from 'react'
import styles from './Index.module.css'
import laptop from '../../images/c1.webp'
import finance from '../../images/c2.webp'
import charity from '../../images/c3.webp'
import Academic from '../../images/c4.webp'
import serviceProvider from '../../images/c5.webp'
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
            <div className={styles.mainHeading}>
                <h1>Power Your Entire <span>Company</span></h1>
            </div>
            <div className={styles.mainTextContainer}>
                <p>Whatever it is you need, An entirely new website or an old one revamped, Our customer representatives are just a call away to answer all your queries. We’re always excited to start your project.</p>
            </div>

            <div className={styles.allImagesContainers}>
                <div className={styles.firstImageContainerWrapper}>
                    <div className={styles.firstimageContainer}>
                        <img src={laptop} alt="" className={styles.firstImage} />
                    </div>
                    <h1>Online Store</h1>
                </div>
                <div className={styles.firstImageContainerWrapper}>
                    <div className={styles.secondimageContainer}>
                        <img src={finance} alt="" className={styles.secondImage} />
                    </div>
                    <h1>Finance</h1>
                </div>
                <div className={styles.firstImageContainerWrapper}>
                    <div className={styles.thirdimageContainer}>
                        <img src={charity} alt="" className={styles.thirdImage} />
                    </div>
                    <h1>Charity</h1>
                </div>
                <div className={styles.firstImageContainerWrapper}>
                    <div className={styles.forthImageContainer}>
                        <img src={Academic} alt="" className={styles.forthImage} />
                    </div>
                    <h1>Academic</h1>
                </div>
                <div className={styles.firstImageContainerWrapper}>
                    <div className={styles.fifthImageContainer}>
                        <img src={serviceProvider} alt="" className={styles.fifthImage} />
                    </div>
                    <h1>Academic</h1>
                </div>
            </div>

        </div>
    )
}

export default Index