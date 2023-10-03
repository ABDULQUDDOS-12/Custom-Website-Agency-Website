import React, { useEffect,useState } from 'react'
import styles from './Index.module.css'
import newstyles from '../Web Packages/Index.module.css'
import banner1 from '../../images/Banner 1.png'
import banner2 from '../../images/Banner 2.png'
import banner3 from '../../images/Banner 3.png'
import banner4 from '../../images/Banner 4.png'
import banner5 from '../../images/Banner 5.png'
import banner6 from '../../images/Banner 6.png'
import { GiCheckMark } from "react-icons/gi";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Index = ({ selectedOption }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const cardData = [
        {
            id: 'Basic Website Package',
            image: banner1,
            title: 'Basic Website Package',
            checkpoints: [
                '3 page Website',
                '2 Stock Images',
                '1 jQuery Slider Banner',
                'Contact/Query Form',
                '48 to 72 hours TAT',
                'Complete Deployment',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                '100% Money Back Guarantee'
            ]
        },
        {
            id: 'Startup Website Package',
            image: banner2,
            title: 'Startup Website Package',
            checkpoints: [
                '5 Page Website',
                '5 Stock Photos',
                '3 Banner Design',
                '1 jQuery Slider Banner',
                'FREE Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                '48 to 72 hours TAT',
                '100% Satisfaction Guarantee',
                '100% Money Back Guarantee',
                'Mobile Responsive will be Additional $200*',
                'CMS will be Additional $250*',
            ]
        },
        {
            id: 'Professional Website Package',
            image: banner3,
            title: 'Professional Website Package',
            checkpoints: [
                '10 Unique Pages Website',
                'CMS / Admin Panel Support',
                '8 Stock images',
                '5 Banner Designs',
                'Mobile Responsive',
                '1 jQuery Slider Banner',
                'FREE Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                '48 to 72 hours TAT',
                "Complete Deployment",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee"
            ]
        },
        {
            id: 'Elite Website Package',
            image: banner4,
            title: 'Elite Website Package',
            checkpoints: [
                'Upto 15 Unique Pages Website',
                'Conceptual and Dynamic Website',
                'Mobile Responsive',
                'Online Reservation/Appointment Tool (Optional)',
                'Online Payment Integration (Optional)',
                'Custom Forms',
                'Lead Capturing Forms (Optional)',
                'Striking Hover Effects',
                'Newsletter Subscription (Optional)',
                'Newsfeed Integration',
                "Social Media Integration",
                "Search Engine Submission",
                "5 Stock Photos",
                "3 Unique Banner Design",
                "1 jQuery Slider Banner",
                "Complete W3C Certified HTML",
                "48 to 72 hours TAT",
                "Complete Deployment",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee"
            ]
        },
        {
            id: 'Buisness Website Package',
            image: banner5,
            title: 'Buisness Website Package',
            checkpoints: [
                '15 to 20 Pages Website',
                'Custom Made, Interactive, Dynamic & High End Design',
                'Custom WP (or) Custom PHP Development',
                '1 jQuery Slider Banner',
                'Up to 10 Custom Made Banner Designs',
                '10 Stock Images',
                'Unlimited Revisions',
                'Special Hoover Effects',
                'Content Management System (CMS)',
                'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
                'Online Payment Integration (Optional)',
                'Multi Lingual (Optional)',
                'Custom Dynamic Forms (Optional)',
                'Signup Area (For Newsletters, Offers etc.)',
                'Search Bar',
                'Live Feeds of Social Networks integration (Optional)',
                'Mobile Responsive',
                'Free Google Friendly Sitemap',
                'Search Engine Submission',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Complete Deployment',
                'Dedicated Accounts Manager',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                '100% Money Back Guarantee'


            ]
        },
        {
            id: 'Corporate Website Package',
            image: banner6,
            title: 'Corporate Website Package',
            checkpoints: [

                '15 to 20 Pages Website',
                '15 Seconds 2D Explainer Video',
                'Voice – Over & Sound Effects',
                'Professional Script Writing',
                'Storyboard',
                'SEO Meta Tags',
                'Custom Made, Interactive, Dynamic & High End Design',
                'Custom WP (or) Custom PHP Development',
                '1 jQuery Slider Banner',
                'Up to 10 Custom Made Banner Designs',
                '10 Stock Images',
                'Unlimited Revisions',
                'Special Hoover Effects',
                'Content Management System (CMS)',
                'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
                'Online Payment Integration (Optional)',
                'Multi Lingual (Optional)',
                'Custom Dynamic Forms (Optional)',
                'Signup Area (For Newsletters, Offers etc)',
                'Search Bar',
                'Live Feeds of Social Networks integration (Optional)',
                'Mobile Responsive',
                'Free Google Friendly Sitemap',
                'Search Engine Submission',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Complete Deployment',
                'Dedicated Accounts Manager',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee'
            ]
        },
    ];
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640); // Adjust the screen width as needed
          };
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);
    const filteredCards = isMobile ? cardData.filter((card) => card.id === selectedOption) : cardData;
    return (
        <div className={styles.mainContainer}>
            <div data-aos="zoom-in-up" className={newstyles.mainHeading}>
                <h1>Web <span>packages</span> We Offer</h1>
            </div>
            <div data-aos="zoom-in-up" className={newstyles.mainTextContainer}>
                <p>We believes in catering unique services in competitive pricing structures. We have some fabulous packages carefully crafted for every services offered to offer the premium quality within your budget.</p>
            </div>
            <div data-aos="zoom-in-up" className={newstyles.buttonsContainer}>
                <button>Website Design</button>
                <button>E-commerce</button>
                <button>Wordpress</button>
                <button>Branding</button>
                <button>Logo</button>
                <button>Video Animation</button>
                <button>SEO</button>
            </div>
        <div className={styles.cardsContainer}>
        
            {filteredCards.map((card,index) => (
                <div key={index} data-aos="zoom-in-up" className={styles.firstCard}>
                    <div className={styles.firstImageContainer}>
                        <img src={card.image} alt="" className={styles.firstImage} />
                    </div>
                    <div className={styles.textHeadingContainer}>
                        <p>{`Plan Includes (${card.title}):`}</p>
                    </div>
                    <hr />
                    <div className={styles.checkPoints}>
                        {card.checkpoints.map((checkpoint, index) => (
                            <span key={index}>
                                <GiCheckMark /> {checkpoint}
                            </span>
                        ))}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>CHAT NOW</button>
                        <button>ORDER NOW</button>
                    </div>
                    <div className={styles.lastlineContainer}>
                        <p>Suitable for potential super-startups and brand revamps for companies</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Index