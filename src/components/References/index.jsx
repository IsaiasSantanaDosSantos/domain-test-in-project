import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

import  SlideItem  from '../../elements/SlideItem'
import { ReferencesContent } from "./styled";

export const References = () => {
    const sliderRef = useRef(null);
    const { t } = useTranslation()

    useEffect(() => {
      const interval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }, 10000);
  
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
        clearInterval(interval);
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

      
 

    return(
        <ReferencesContent id='references'>
            <h1 className=''>{t ('recommendations')}</h1>
                <p className="subTitle fade-up">{t ('recomendations_title')}</p>
               
                  <Slider {...settings} ref={sliderRef} className='fade-up'>
                  <SlideItem
                    name={t ('fourth_recom_name')}
                    position={t ('fourth_recom_position')}
                    description={t ('fourth_recom_decription')}
                    source={t ('recom_source')}
                    photo={t ('fourth_recom_photo')}
                    />
                    <SlideItem
                    name={t ('first_recom_name')}
                    position={t ('first_recom_position')}
                    description={t ('first_recom_decription')}
                    source={t ('recom_source')}
                    photo={t ('first_recom_photo')}
                    />
                    <SlideItem
                    name={t ('secund_recom_name')}
                    position={t ('secund_recom_position')}
                    description={t ('secund_recom_decription')}
                    source={t ('recom_source')}
                    photo={t ('secund_recom_photo')}
                    />
                    <SlideItem
                    name={t ('third_recom_name')}
                    position={t ('third_recom_position')}
                    description={t ('third_recom_decription')}
                    source={t ('recom_source')}
                    photo={t ('third_recom_photo')}
                    />
                  </Slider>
        </ReferencesContent>
    );
};