import { useTranslation } from 'react-i18next';

import { PortiFolioCardContainer }from './styled';
import  projectOneImage  from '../../../public/img/portfolio_project_image.jpg'
// import  projectTwoImage  from '../../../public/img/API_Rest-imagem.jpg'
// import  projectThreeImage  from '../../../public/img/API_consumer-image.jpg'
// import  projectFourImage  from '../../../public/img/golPag-image.jpg'
// import  projectFiveImage  from '../../../public/img/EADMovel-image.jpg'
// import  projectSixImage  from '../../../public/img/meeting_image.jpg'

export const PortfolioCard = () =>{
    const { t } = useTranslation()
    return(
        <PortiFolioCardContainer>
            <div className="portfolio-card">
                <div
                className="backgroundImage"
                style={{ backgroundImage: `url(${projectOneImage})` }}
                />
                <div className="card-content">
                    <p className="card-title">PortFolio project</p>
                </div>
                <div className="card-aba">
                    <p className="aba-title">PortFolio project</p>
                    <p className="goToDetailsBtn">Detalhes</p>
                </div>
            </div>
        </PortiFolioCardContainer>
    )
}