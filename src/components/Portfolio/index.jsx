/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PortfolioContent }from './styled';
import data from '../../PortfolioData/portfolio-data.json';
import { PortfolioDetails } from '../../elements/PortfolioDetails';


export const Portfolio = () => {
    const { t } = useTranslation()
    const [ showDetails, setShowDetails] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleDetailsClick = (project, index) => {
        setSelectedProject(project);
        setSelectedIndex(index);
        setShowDetails(true);
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

    return (
        <section  id='portfolio'>
            <PortfolioContent>
                <h1 className='fade-up'>{t ('portfolio')}</h1>
                <p className="subTitle fade-up">{t ('portfolio-summary')}</p>
                <div className="portfolio-content">

                    <div className="portfolio-content  fade-up">
                        {data.Projects.map((project, index) => (
                            <div className="portfolio-card" key={index}>
                            <div
                                className="backgroundImage"
                                style={{ backgroundImage: `url(${project.background})` }}
                            />
                            <div className="card-content">
                                <p className="card-title">{ t (`portfolio-title-${index}`)}</p>
                            </div>
                            <div className="card-aba">
                                <p className="aba-title">{t (`portfolio-title-${index}`)}</p>
                                {/* <a className="goToDetailsBtn" href={project['portfolio-link']} >Detalhes</a> */}
                                <p className="goToDetailsBtn" onClick={() => handleDetailsClick(project, index)}>Detalhes</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PortfolioContent>
            {showDetails && <PortfolioDetails 
                project={selectedProject}
                index={selectedIndex}
                setShowDetails={setShowDetails}/>}
        </section>
    );
};

/*
PRECISO PASSAR O CAMINHO DO BACKGROUND E O INDICE PARA O COMPONENTE "PortfolioDetails", A PRINCÍPIO ESTA PASSANDO APENAS UMA STRING

*/