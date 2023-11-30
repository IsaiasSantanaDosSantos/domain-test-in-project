import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaDesktop, FaPaintBrush, FaMobileAlt, FaCompass , FaRocket, FaUniversalAccess } from 'react-icons/fa'

import { ServicesContent }from './styled';

export const Services = () => {
    const { t } = useTranslation()

    useEffect(() => {
        const handleScroll = () => {
          const elements = document.querySelectorAll('.fade-up');
          const windowHeight = window.innerHeight;
      
          elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
      
            if (elementPosition - windowHeight <= 0) {
              element.classList.add('animate');
             
            }
          });
        };
      
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <section  id='services'>
            <ServicesContent>
                <h1>{t ('servicesTitle')}</h1>
                <p className="subTitle fade-up">{t ('servicesSubTitle')}</p>
                <div className="services-cards-box">
                    <div className="services-cards fade-up">
                        <FaDesktop className='services-icons' />
                        <p className="services-cards-title">{t ('servicesCardOne-title')}</p>
                        <p className="services-cards-text">{t ('servicesCardOne-text')}</p>
                    </div>
                    <div className="services-cards fade-up">
                        <FaPaintBrush className='services-icons'/>
                        <p className="services-cards-title">{t ('servicesCardTwo-title')}</p>
                        <p className="services-cards-text">{t ('servicesCardTwo-text')}</p>
                    </div>
                    <div className="services-cards fade-up">
                        <FaMobileAlt className='services-icons' />
                        <p className="services-cards-title">{t ('servicesCardThree-title')}</p>
                        <p className="services-cards-text">{t ('servicesCardThree-text')}</p>
                    </div>
                    <div className="services-cards fade-up">
                        <FaCompass className='services-icons' />
                        <p className="services-cards-title">{t ('servicesCardFour-title')}</p>
                        <p className="services-cards-text">{t ('servicesCardFour-text')}</p>
                    </div>
                    <div className="services-cards fade-up">
                        <FaRocket className='services-icons' />
                        <p className="services-cards-title">{t ('servicesCardFive-title')}</p>
                        <p className="services-cards-text">{t ('servicesCardFive-text')}</p>
                    </div>
                    <div className="services-cards fade-up">
                        <FaUniversalAccess className='services-icons'/>
                        <p className="services-cards-title">{t ('servicesCardSix-title')}</p>
                        <p className="services-cards-text">{t ('servicesCardSix-text')}</p>
                    </div>
                </div>
            </ServicesContent>
        </section>
    );
};