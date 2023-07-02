/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { AboutContent }from './styled';
import IsaiasPhoto from '../../../public/img/isaias-black_t-shirt.jpg'

export const About = () => {
    const { t } = useTranslation()

    useEffect(() => {
        const handleScroll = () => {
          const elements = document.querySelectorAll('.fade-up');
          const elementTwo = document.querySelectorAll('.zoom');
          const windowHeight = window.innerHeight;
          elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition - windowHeight <= 0) {
              element.classList.add('animate');
              
            }
          });
          elementTwo.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition - windowHeight <= 0) {
              element.classList.add('zoomAnimate');
             
            }
          });
        };
      
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => {
        //   clearTimeout(timeout); className="animate"
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <section  id='about'>
            <AboutContent  >
                <h1>{t ('aboutTitle')}</h1>
                <p className="subTitle fade-up">{t ('about-subTitle')}</p>
                <div className="about-content">
                    <div className="about-texts fade-up">
                        <p className="main-text">{t ('main-text')} <span className="my-name"> Isaias Santana</span></p>
                        <p className="normal-text">{t ('about-text-firstLine')}</p>
                        <p className="normal-text">{t ('about-text-secundLine')}</p>
                        <p className="normal-text">{t ('about-text-thirdLine')}</p>
                        <p className="normal-text">{t ('about-text-fourthLine')}</p>
                        <p className="normal-text">{t ('about-text-fivethLine')}</p>
                    </div>
                    <div className="about-experience fade-up">
                        <p className="experience-number"><span className="zoom">20</span><span className="experience-circle"></span></p>
                        <p className="experience-text">{t ('years-of')} <span> {t ('experiance')}</span></p>
                        <img src={IsaiasPhoto} alt="Isaias' photo" className='myPhoto' />
                    </div>
                </div>
                <div className="about-contact fade-up">
                    <p>{t ('name')}: <br /><span className="contact-info">Isaias Santana dos Santos</span></p>
                    <p>{t ('email')}: <br /><span className="contact-info"><a href="malito:santanawebdev@gmail.com">santanawebdev@gmail.com</a> </span></p>
                    <p>{t ('date birth text')}: <br /><span className="contact-info">{t ('date birth')}</span></p>
                    <p>{t ('from')}: <br /><span className="contact-info"><a className='loacation' href="https://goo.gl/maps/9HeL7UpRSsWs5FU38">São José dos Campos, SP, BR</a> </span></p>
                </div>
            </AboutContent>
        </section>
    );
};