import { useTranslation } from 'react-i18next';

import { FooterContainer } from './styled';
import logo from '../../assets/img/black_santana_logo.jpg'

export const Footer = () => {
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear();
    return(
        <FooterContainer>
            <div className="container">
                <a href="#home"><img src={logo} alt="Santana Developer logo" /></a>
                <span>
                    <p>{t('copyright')} © {currentYear}.</p> 
                    <p>{t('all_rights_reserved')}</p>
                </span>
            </div>
        </FooterContainer>
    );
};