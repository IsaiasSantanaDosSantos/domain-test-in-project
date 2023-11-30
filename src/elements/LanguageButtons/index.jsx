import { useTranslation } from "react-i18next";
import { useState } from "react";

import { ContainerLinguageBtn } from "./styled";

export const LanguageButtons = () => {
  const { i18n } = useTranslation();
  const [isTranslatedToPortuguese, setIsTranslatedToPortuguese] = useState(
    i18n.language === "pt",
  );

  const handleTranslateToEnglish = () => {
    i18n.changeLanguage("en");
    setIsTranslatedToPortuguese(false);
  };

  const handleTranslateToPortuguese = () => {
    i18n.changeLanguage("pt");
    setIsTranslatedToPortuguese(true);
  };

  return (
    <>
      <ContainerLinguageBtn>
        {isTranslatedToPortuguese ? (
          <button onClick={handleTranslateToEnglish} aria-label="English">
            <span className="flag-icon flag-icon-gb" />{" "}
            <span className="linguageBtn">English</span>
          </button>
        ) : (
          <button onClick={handleTranslateToPortuguese} aria-label="Portugês">
            <span className="flag-icon flag-icon-br" />
            <span className="linguageBtn">Portugês</span>
          </button>
        )}
      </ContainerLinguageBtn>
    </>
  );
};
