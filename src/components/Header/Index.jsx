import React, { useState, useEffect } from 'react'
import styles from './Index.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import AOS from 'aos'
import 'aos/dist/aos.css';
const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    }); 
  }, []);
  const [buttonText, setButtonText] = useState("Get A Quote");
  const changeButtonText = () => {
    if (window.innerWidth <= 768) {
      setButtonText("Quote");
    } else {
      setButtonText("Get A Quote"); // Reset the text for larger screens
    }
  };
  useEffect(() => {
    window.addEventListener("resize", changeButtonText);
    return () => {
      window.removeEventListener("resize", changeButtonText);
    };
  }, []);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    console.log(element)
    console.log(123)
    if (element) {

      element.scrollIntoView({behavior: 'smooth'});
    }
  };
  return (
    <div className={styles.wrapper}>
      <div data-aos="fade-down" className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.image} src="https://customwebsiteagency.com/images/logo.png" alt="" />
        </div>
        <div className={showMediaIcons ? styles.mobilemenuLink : styles.navbarMainContainer}>
          <ul>
            <li onClick={() => scrollToSection('empowering-buisness')}>HOME</li>
            <li onClick={() => scrollToSection('buisness')}>ABOUT US</li>
            <li onClick={() => scrollToSection('web-packages')}>SERVICES</li>
            <li onClick={() => scrollToSection('portfolio')}>PORTFOLIO</li>
            <li onClick={() => scrollToSection('web-packages')}>PACKAGES</li>
            <li onClick={() => scrollToSection('contact')}>CONTACT</li>
          </ul>
        </div>
        <div className={styles.getAQuote}>
          <button onClick={() => scrollToSection('quote')} className={styles.getAQuoteButton}>{buttonText}</button>
        </div>
        <div className={styles.hamburgerMenu}>
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu className={styles.hambergerMenuIcon} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Index