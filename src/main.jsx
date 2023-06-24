
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider  } from 'react-i18next';

import enTranslations from '../translateFile/en/translation.json';
import ptTranslations from '../translateFile/pt/translation.json';
import './styles/global.css';
import { MainContainer } from './styled';
import { InicialPage } from './components/InitialPage';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Interested } from './components/Interested';
import { References } from './components/References';
import { Contact } from './components/Contact';
import { LanguageButtons } from './elements/LanguageButtons';
import { Footer } from './components/Footer';

function Main() {
  const [showComponent, setShowComponent] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(false);
  }, 4000);
  
    return () => clearTimeout(timeout);
  }, []);
  
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: enTranslations
    },
    pt: {
      translation: ptTranslations
    }
  }
});

  return (
    <I18nextProvider i18n={i18n}>
      {showComponent ?  (
        <div>
          <InicialPage />
        </div>
      ): (
      <React.StrictMode>
          <>
            <NavBar />
            <Home />
            <MainContainer>
              <About />
              <Services />
              <Resume/>
              <Portfolio/>
            </MainContainer>
              <Interested/>
            <MainContainer>
              <References/>
            </MainContainer>
              <Contact/>
              <Footer/>
          </>
          <LanguageButtons/>
      </React.StrictMode>
      )}
    </I18nextProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
export default Main;
