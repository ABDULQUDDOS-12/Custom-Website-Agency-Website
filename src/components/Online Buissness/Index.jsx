import React, { useEffect ,useState} from 'react'
import styles from './Index.module.css'
import mockup from '../../images/mockup.webp'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Index = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out', 
        });
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    const [showArrow,setShowArrow] = useState(false)
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        setShowArrow(scrollY > windowHeight);
      };
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
        <div id='buisness'>
            <div data-aos="zoom-in" className={styles.mainContainer} >
                <div className={styles.leftHandContainer}>
                    <div className={styles.mainHeading}>
                        <h1>Get Your <span>Business</span> Online Today!</h1>
                    </div>
                    <div className={styles.textContainer}>
                        <p>We're an Award-Winning Website Design Company. Our aim is to provide the best website design service that is affordable for small business and corporates. Top-Rated website designer & web application development company in Los Angeles, California.</p>
                        <p>Custom Website Agency is a creative web design agency with a sole purpose to develop exclusive things for our beloved clients. We believe in building meaningful and long-term relationships with our clients and their brands through our creative designs, web development and engaging software solutions.</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>GET STARTED</button>
                        <button>CHAT WITH US</button>
                    </div>
                </div>
                <div className={styles.rightHandContainer}>
                    <div className={styles.foregroundImage}>
                        <img src={mockup} alt="" />
                    </div>
                </div>
            </div>
            {showArrow && ( <div onClick={scrollToTop} className={styles.upArrowContainer}>
                <BsFillArrowUpCircleFill className={styles.arrowUp}/>
            </div>)}
        </div>
    )
}

export default Index