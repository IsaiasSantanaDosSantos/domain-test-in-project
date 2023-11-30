/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import { Title, HeaderContainer } from "./styled";
import backgraundImage from "../../assets/img/background-one.jpg";
import backgraundImageOne from "../../assets/img/header-background_image.jpg";
import backgraundImageTwo from "../../assets/img/background-two.jpg";
import backgraundImageThree from "../../assets/img/background-three.jpg";
import backgraundImageFour from "../../assets/img/background-four.jpg";
import backgraundImageFive from "../../assets/img/background-five.jpg";

export const Home = () => {
  const [text, setText] = useState("");
  // const words = ['Santana', 'Web', 'developer'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const { t, i18n } = useTranslation();
  const images = [
    backgraundImage,
    backgraundImageOne,
    backgraundImageTwo,
    backgraundImageThree,
    backgraundImageFour,
    backgraundImageFive,
  ];
  useEffect(() => {
    const words =
      i18n.language === "pt"
        ? ["Santana", "Desenvolvedor", "Web"]
        : ["Santana", "Web", "Developer"];
    const type = () => {
      const currentWord = words[currentWordIndex];
      const isComplete = !isDeleting && text === currentWord;
      const isDeletingComplete = isDeleting && text === "";

      if (isComplete) {
        // Pause before deleting
        setTimeout(() => {
          setIsDeleting(true);
        }, 500);
      } else if (isDeletingComplete) {
        // Move to the next word
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsDeleting(false);
      }

      // Update the text
      if (isDeleting) {
        setText((prevText) => prevText.slice(0, -1));
      } else {
        setText((prevText) => currentWord.slice(0, prevText.length + 1));
      }

      // Set the speed for the next letter
      setTypingSpeed(isDeleting ? 100 : 200);
    };

    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, typingSpeed, i18n.language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 100);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundImage = images[currentImageIndex];
  return (
    <section id="home">
      <HeaderContainer>
        <div
          className={`backgroundImage ${
            isTransitioning ? "image-transition" : ""
          }`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="homeMark"></div>
        <div className="homeContent">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Title>{t("title")}</Title>
          <p className="dinamicText">
            {text} <span className="focus" />
          </p>
          <p className="headerInfo">{t("headerInfo")}</p>
          <a className="headerLink" href="#portfolio">
            {t("headerLink")}
          </a>
          <div className="homeIconBox">
            <a href="#about" area-label="About">
              <FaArrowDown className="homeIcon" />
              <span className="arrowBtn">See more information about me</span>
            </a>
          </div>
        </div>
      </HeaderContainer>
    </section>
  );
};
