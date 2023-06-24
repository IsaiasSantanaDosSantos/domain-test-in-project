/* eslint-disable react/prop-types */
import { RecomSlideItemContent } from './styled'

const SlideItem = ({ photo, name, position, description, source }) => {

  return (
    <RecomSlideItemContent>
        <div className="slide-item">
            <a href='https://www.linkedin.com/in/isaiassantanadossantos/details/recommendations/' target="_blank" rel="noopener noreferrer">
                <img src={photo} alt={name} />
                <p className="slide-name">{name}</p>
                <p className="slide-position">{position}</p>
                <p className="slide-description">{description}</p>
                <p className="slide-source">{source}</p>
            </a>
        </div>
    </RecomSlideItemContent>
  );
};

export default SlideItem;
