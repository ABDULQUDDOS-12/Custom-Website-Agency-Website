import React,{useEffect} from 'react'

import styles from './Index.module.css'
import firstPortfolioImage from '../../images/firspPortfolio.webp'
import secondPortfolioImage from '../../images/secondPortfolio.webp'
import thirdPortfolioImage from '../../images/thirdPortfolio.webp'
import forthPortfolioImage from '../../images/forthPortfolio.webp'
import fifthPortfolioImage from '../../images/fifthPortfolio.webp'
import sixthPortfolioImage from '../../images/6thPortfolio.webp'
import seventhPortfolioImage from '../../images/seventhPortfolio.webp'
import eightPortfolioImage from '../../images/eighthPortfolio.webp'
import ninthPortfolioImage from '../../images/ninthPortfolio.webp'
import AOS from 'aos'
import 'aos/dist/aos.css';
const Index = () => {
    useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation timing function
      }); // Initialize AOS
    }, []);
    return (
        <div   className={styles.mainContainer} id='portfolio'>
            <div data-aos="zoom-in-up" className={styles.mainHeading}>
                <h1>Our Award-Winning <span>Website</span> Portfolio</h1>
                <p>Having Spent Years In The Industry, We Have A Wide Portfolio To Talk About</p>
            </div>
            <div className={styles.wrapper}>
                <div data-aos="zoom-in-up" className={styles.firstImage}>
                    <img src={firstPortfolioImage} alt="" className={styles.hoverZoomImage} />
                </div>
                <div data-aos="zoom-in-up" className={styles.secondImage}>
                    <img src={secondPortfolioImage} alt="" className={styles.secondhoverZoomImage} />
                </div>
                <div data-aos="zoom-in-up" className={styles.secondImage}>
                    <img src={thirdPortfolioImage} alt="" className={styles.secondhoverZoomImage} />
                </div>
                <div data-aos="zoom-in-up" className={styles.firstImage}>
                    <img src={forthPortfolioImage} alt="" className={styles.hoverZoomImage} />
                </div>
                <div data-aos="zoom-in-up" className={styles.secondImage}>
                    <img src={fifthPortfolioImage} alt="" className={styles.thirdhoverZoomImage} />
                </div>
                <div data-aos="zoom-in-up" className={styles.secondImage}>
                    <img src={sixthPortfolioImage} alt="" className={styles.forthhoverZoomImage} />
                </div>
                <div data-aos="zoom-in-up" className={styles.firstImage}>
                    <img src={seventhPortfolioImage} alt="" className={styles.hoverZoomImage} />
                </div>
                <div data-aos="zoom-in-up" className={styles.secondImage}>
                    <img src={eightPortfolioImage} alt="" className={styles.fifthhoverZoomImage} />
                </div>
                <div data-aos="zoom-in-up" className={styles.secondImage}>
                    <img src={ninthPortfolioImage} alt="" className={styles.sixthhoverZoomImage} />
                </div>
            </div>
        </div>

    )
}

export default Index