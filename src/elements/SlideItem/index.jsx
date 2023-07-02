/* eslint-disable react/prop-types */
import { useRef} from 'react';

import { RecomSlideItemContent } from './styled'

const SlideItem = ({ photo, name, position, description, source }) => {
  const sliderRef = useRef(null);

  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };
  return (
    <RecomSlideItemContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="slide-item">
            
            <img src={photo} alt={name} />
            <p className="slide-name">{name}</p>
            <p className="slide-position">{position}</p>
            <p className="slide-description">{description}</p>
            <a href='https://www.linkedin.com/in/isaiassantanadossantos/details/recommendations/' target="_blank" rel="noopener noreferrer"> 
              <p className="slide-source">{source}</p>
            </a>
        </div>
    </RecomSlideItemContent>
  );
};

export default SlideItem;
