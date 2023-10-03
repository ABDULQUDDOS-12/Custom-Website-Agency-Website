import React, { useState, useEffect } from 'react'
import styles from './Index.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import CardComponent from '../Pricing Cards/Index'
const Index = () => {
    const [selectedOption, setSelectedOption] = useState('');
    useEffect(() => {

        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation timing function
        }); // Initialize AOS
    }, []);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div id='web-packages' className={styles.mainContainer}>
            <div data-aos="zoom-in-up" className={styles.mainHeading}>
                <h1>Web <span>packages</span> We Offer</h1>
            </div>
            <div data-aos="zoom-in-up" className={styles.mainTextContainer}>
                <p>We believes in catering unique services in competitive pricing structures. We have some fabulous packages carefully crafted for every services offered to offer the premium quality within your budget.</p>
            </div>
            <div data-aos="zoom-in-up" className={styles.buttonsContainer}>
                <button>Website Design</button>
                <button>E-commerce</button>
                <button>Wordpress</button>
                <button>Branding</button>
                <button>Logo</button>
                <button>Video Animation</button>
                <button>SEO</button>
            </div>
            <div data-aos="zoom-in-up" className={styles.dropdownMenu}>
                <select name="" id="" onChange={handleOptionChange}>
                    <option value="Basic Website Package">Basic Website Package</option>
                    <option value="Startup Website Package">Startup Website Package</option>
                    <option value="Professional Website Package">Professional Website Package</option>
                    <option value="Elite Website Package">Elite Website Package</option>
                    <option value="Buisness Website Package">Buisness  Website Package</option>
                    <option value="Corporate Website Package">Corporate Website Package</option>
                </select>
            </div>
            <CardComponent className={styles.cardComponent} selectedOption={selectedOption} />
        </div>
    )
}

export default Index