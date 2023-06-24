/* eslint-disable react/prop-types */
import { FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';

import { PortfolioDetailsContent }from './styled';

export const PortfolioDetails = ({ project, index, setShowDetails }) =>{
    const { t } = useTranslation()
    const handleCloseDetails = () => {
        setShowDetails(false);
      };
    return(
        <PortfolioDetailsContent>
            <div className="windowDetailsCard">
                <div className="closedWindow"><FaTimes className="windowIcon" onClick={handleCloseDetails}/></div>
                <div className="windowCartContent">
                    <div className="imageBox">
                        <div className="backgroundImage"
                        style={{ backgroundImage: `url(${project.background})` }}></div>
                    </div>
                    <div className="windowInfo">
                        <p className="windowTitle">{ t (`portfolio-title-${index}`)}</p>
                        <div className="windowDescription">
                            <p className="descriptionText">{ t (`description-project-${index}`)}</p>
                        </div>
                        <div className="windowBtnBox">
                            <a href={project.portfolio_link} target="_blank" rel="noopener noreferrer" className="pageProjectLink">See project</a>
                            <a href={project.github_project} target="_blank" rel="noopener noreferrer" className="gitHubProjectLink">See GitHub </a>
                        </div>
                    </div>
                </div>
            </div>
        </PortfolioDetailsContent>
    )
}