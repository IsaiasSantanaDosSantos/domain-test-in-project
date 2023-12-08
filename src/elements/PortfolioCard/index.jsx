import { useTranslation } from "react-i18next";

import { PortiFolioCardContainer } from "./styled";
import projectOneImage from "../../../public/img/portfolio_project_image.webp";
// import  projectTwoImage  from '../../../public/img/API_Rest-imagem.webp'
// import  projectThreeImage  from '../../../public/img/API_consumer-image.webp'
// import  projectFourImage  from '../../../public/img/golPag-image.webp'
// import  projectFiveImage  from '../../../public/img/EADMovel-image.webp'
// import  projectSixImage  from '../../../public/img/meeting_image.webp'

export const PortfolioCard = () => {
  const { t } = useTranslation();
  return (
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
  );
};
