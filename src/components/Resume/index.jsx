/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ResumeContent }from './styled';

export const Resume = () => {
    const { t } = useTranslation()

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
        <section  id='resume'>
            <ResumeContent>
                <h1>{t ('resume')}</h1>
                <p className="subTitle fade-up">{t ('resume-summary')}</p>
                <div className="resume-content">

                    <div className="resume-columnOne">
                        <div className="columnOneBar fade-up"></div>

                        <p className="resume-columnTitle fade-up">{t ('resumo-education-title')}</p>

                        <div className="resume-columnItems fade-up">
                            <p className="columnItemTitles">{t ('education-one')}</p>
                            <p className="column-institute">{t ('education-instituition-one')}</p>
                            <p className="column-description">{t ('education-description-one')}</p>
                        </div>

                        <div className="resume-columnItems fade-up">
                            <p className="columnItemTitles">{t ('education-two')}</p>
                            <p className="column-institute">{t ('education-instituition-two')}</p>
                            <p className="column-description">{t ('education-description-two')}</p>
                        </div>

                        <div className="resume-columnItems fade-up">
                            <p className="columnItemTitles">{t ('education-three')}</p>
                            <p className="column-institute">{t ('education-instituition-three')}</p>
                            <p className="column-description">{t ('education-description-three')}</p>
                        </div>
                        <div className="resume-columnItems fade-up">
                            <p className="columnItemTitles">{t ('education-four')}</p>
                            <p className="column-institute">{t ('education-instituition-four')}</p>
                            <p className="column-description">{t ('education-description-four')}</p>
                        </div>
                    </div>
                    <div className="resume-columnTwo">
                        <div className="columnOneBar fade-up"></div>

                        <p className="resume-columnTitle fade-up">{t ('resumo-experience-title')}</p>

                        <div className="resume-columnItems fade-up">
                            <p className="columnItemTitles">{t ('experience-one')}</p>
                            <p className="column-institute">{t ('experience-instituition-one')}</p>
                            <p className="column-description">{t ('experience-description-one')}</p>
                        </div>

                        <div className="resume-columnItems fade-up">
                            <p className="columnItemTitles">{t ('experience-two')}</p>
                            <p className="column-institute">{t ('experience-instituition-two')}</p>
                            <p className="column-description">{t ('experience-description-two')}</p>
                        </div>

                        <div className="resume-columnItems fade-up">
                            <p className="columnItemTitles">{t ('experience-three')}</p>
                            <p className="column-institute">{t ('experience-instituition-three')}</p>
                            <p className="column-description">{t ('experience-description-three')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="resumeSkills">
                    <p className="skillTitle fade-up">{t ('skillTitle')}</p>
                    <div className="skillBox">
                        <div className="skillColumns">
                            <div className="skillItems fade-up">
                                <div className="skillItemsHeader">
                                    <p className="skillName">{t ('skillName-one')}</p>
                                    <p className="skillPorcentage">70%</p>
                                </div>
                                <div className="skillOneBar"><span></span></div>
                            </div>

                            <div className="skillItems fade-up">
                                <div className="skillItemsHeader">
                                    <p className="skillName">Javascript</p>
                                    <p className="skillPorcentage">85%</p>
                                </div>
                                <div className="skillTwoBar"><span></span></div>
                            </div>

                            <div className="skillItems fade-up">
                                <div className="skillItemsHeader">
                                    <p className="skillName">React.js</p>
                                    <p className="skillPorcentage">70%</p>
                                </div>
                                <div className="skillThreeBar"><span></span></div>
                            </div>

                        </div>
                        <div className="skillColumns">
                            <div className="skillItems fade-up">
                                <div className="skillItemsHeader">
                                    <p className="skillName">HTML 5</p>
                                    <p className="skillPorcentage">90%</p>
                                </div>
                                <div className="skillFourBar"><span></span></div>
                            </div>

                            <div className="skillItems fade-up">
                                <div className="skillItemsHeader">
                                    <p className="skillName">CSS 3</p>
                                    <p className="skillPorcentage">90%</p>
                                </div>
                                <div className="skillFiveBar"><span></span></div>
                            </div>

                            <div className="skillItems fade-up">
                                <div className="skillItemsHeader">
                                    <p className="skillName">Bootstrap</p>
                                    <p className="skillPorcentage">60%</p>
                                </div>
                                <div className="skillSixBar"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="downloadBtnBox">
                    <div className="cvBox fade-up">
                        <a href="https://drive.google.com/file/d/1viTsJS6Ls5pSv2UkPGVR-gi6K3meQsSS/view?usp=share_link" download="Isaias-resume" target="_blank" rel="noopener noreferrer" className="downloadResume">{t ('downloadEnResume')}</a>
                    </div>

                    <div className="cvBox fade-up">
                        <a href="https://drive.google.com/file/d/1oayI_i68bYIDFstXsg3fr2ohxPrXu6Ng/view?usp=share_link" download="curriculo-Isaias" target="_blank" rel="noopener noreferrer" className="downloadResume">{t ('downloadPtResume')}</a>
                    </div>
                </div>
            </ResumeContent>
        </section>
    );
};