/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {  FaArrowRight, FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';


import { ContactContent } from "./styled";
import { Success } from '../../elements/Success';

export const Contact = () => {
    const { t } = useTranslation()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [ errorMsg, setErrorMsg] = useState('');
    const [isVisiblePopup, setIsVisiblePopup] = useState(false)
    const errorName = t('contact_form_error_name');
    const errorEmail = t('contact_form_error_email');
    const errorMassage = t('contact_form_error_message');
   

    const handleVerification = (e) => {
    e.preventDefault();
   
    if(!name){
        setErrorMsg(errorName); 
    } else if(!email) {
        setErrorMsg(errorEmail);
    } else if(!message){
        setErrorMsg(errorMassage);
    } else {
        setIsVisiblePopup(true)
        setName('');
        setEmail('');
        setMessage('');
        setErrorMsg('');
        handleSubmit()
    }
    };

    const handleSubmit = () => {
        const formulario = event.target;
        const formData = new FormData(formulario);

        fetch(formulario.action, {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
           
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
            console.error('error');
          });
          
      };

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

    return(
        <ContactContent id='contact'>
            <div className="contactConatiner">
                <div className="contactTextBox" id='contact-2'>
                    <p className="contactTextTitle fade-up">{t ('contact_text_title')}</p>
                    <p className="contactText fade-up">{t ('contact_text_text')}</p>
                    <p className="contactText contactSubTitle fade-up"><b>{t ('contact_text_subtitle')}</b></p>
                    <p className="contactText fade-up">{t ('contact_text_address')}</p>
                    <p className="contactText contactSubTitle fade-up"><b>{t ('contact_text_call')}</b></p>
                    <p className="contactText fade-up"><a href="tel:5512974011729" target="_blank" rel="noopener noreferrer">(+55) 12 97401-1729 </a></p>
                    <div className="contactIconsBox fade-up">
                      <a href="https://www.linkedin.com/in/isaiassantanadossantos/" className="iconsLink" target="_blank" rel="noopener noreferrer"><FaLinkedin  className="contactIcons"/></a>

                      <a href="https://github.com/IsaiasSantanaDosSantos" className="iconsLink" target="_blank" rel="noopener noreferrer"><FaGithub  className="contactIcons"/></a>

                      <a href="https://web.facebook.com/leila.santana.35" className="iconsLink" target="_blank" rel="noopener noreferrer"><FaFacebook  className="contactIcons"/></a>

                      <a href="mailto:isaiassantanadossantos@hotmail.com" className="iconsLink"
                         target="_blank" rel="noopener noreferrer" ><FaEnvelope  className="contactIcons"/></a>

                      <a href="https://api.whatsapp.com/send?phone=5512974011729" className="iconsLink"><FaWhatsapp  className="contactIcons"/></a>
                    </div>
                </div>
                <div className="contactFormBox">
                    <p className="contactTextTitle fade-up">{t ('contact_form_title')} </p>
                    <form action="https://formsubmit.co/isaiaskurtsantos@gmail.com"  id='my-form' className='fade-up' onSubmit={handleVerification}>
                        <input type="hidden" name="_next" value="" />
                        <input type='hidden' name='_cc' value="isaiassantanadossantos@hotmail.com" />
                        <input type='hidden' name='_captcha' value="false" />
                        <input type='hidden' name='_autoresponse' value="Thank you for your email, we will reply as soon as possible." />
                        <label htmlFor="name">{t ('contact_form_label_name')} <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}/></label>
                        <label htmlFor="email">{t ('contact_form_label_email')}<input type="text" name='email'  value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                        <label htmlFor="msg">{t ('contact_form_label_message')}  <textarea rows="4" cols="50" name='message'  value={message} onChange={(e) => setMessage(e.target.value)}></textarea></label>

                        <button type='submit'> {t ('contact_form_button')} <FaArrowRight/></button>
                        <span className="errorMsg">{errorMsg}</span>
                    </form>
                </div>
            </div>
            {isVisiblePopup && 
            <Success setIsVisiblePopup={setIsVisiblePopup} />}
        </ContactContent>
    )
}
