import { useEffect } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

import { InterestedContent } from "./styled";
import backgraund from "../../../public/img/hire-me_image.jpg";

export const Interested = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-up");
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition - windowHeight <= 0) {
          element.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <InterestedContent>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${backgraund})` }}
      />
      <div className="backgroundMask"></div>
      <div className="interestedContent">
        <h1 className="interestedTitle fade-up">{t("interested_title")}</h1>
        <Link
          className="interestedLink fade-up"
          to="contact-2"
          spy={true}
          smooth="easeInOutQuint"
          offset={-80}
          duration={800}
          area-label="Contact"
          href="#"
        >
          {t("interested_link")}
        </Link>
      </div>
    </InterestedContent>
  );
};
