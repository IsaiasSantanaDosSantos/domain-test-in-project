/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import {  useEffect } from 'react';
import {  FaTimes } from 'react-icons/fa';

import { SuccessContent } from "./styled";
import sendingEmailVideo from '../../assets/video/gif_envelope_animation.mp4';
import sendingEmailImage from '../../assets/img/sending_email_image.png'

export const Success = ({setIsVisiblePopup}) => {
    const { t } = useTranslation()

    const isVideoSupported = ()=>{
        const videoElement = document.createElement('video')
        return Boolean(videoElement.canPlayType)
    }
    
    const handleClosedPopup = () => {
        setIsVisiblePopup(false)
    }
  
    useEffect(() => {
          const timer = setTimeout(() => {
            setIsVisiblePopup(false);
          }, 15000);

        return () => {
            clearTimeout(timer);
          };
    }, []);

    return(
        <SuccessContent>
            <div className="successConteiner">
                <div className="successClosed"><FaTimes className='closedIcon' onClick={handleClosedPopup}/></div>
                <div className="content">
                    <p className="successTitle">{t ('success_itle')}</p>
                    <p className="successText">{t ('success_text')}</p>
                    <div className="successIconBox">
                    {isVideoSupported() ? (
                    <video autoPlay loop muted>
                        <source src={sendingEmailVideo} type='video/mp4' />
                        {t ('not_support_video')}
                    </video>
                    ) : (
                        <img src={sendingEmailImage} alt="Sending email image" />
                    )}
                    </div>
                </div>
            </div>
        </SuccessContent>
    );
};