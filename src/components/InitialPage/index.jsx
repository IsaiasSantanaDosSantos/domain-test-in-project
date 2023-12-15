import { InitialPageContainer } from "./styled";
import logoVideo from "../../assets/video/blackWebDeveloperLogoAnimation.mp4";
import logoImage from "../../assets/img/santana_logo.webp";

export const InicialPage = () => {
  const isVideoSupported = () => {
    const videoElement = document.createElement("video");
    return Boolean(videoElement.canPlayType);
  };
  function createLoadingAnimation() {
    const logoBox = document.querySelector(".logoBox");
    if (logoBox) {
      const p = document.createElement("p");
      p.classList.add("loadindTex");
      p.innerHTML = "Loading<span></span><span></span><span></span>";
      logoBox.appendChild(p);
      time();
    } else {
      setTimeout(createLoadingAnimation, 2300);
    }
  }

  const time = () => {
    setTimeout(() => {
      const p = document.querySelector(".loadindTex");
      if (p) {
        p.remove();
      }
    }, 1650);
  };

  createLoadingAnimation();
  return (
    <InitialPageContainer>
      <div className="interBox">
        <div className="logoBox">
          {isVideoSupported() ? (
            <video autoPlay loop muted loading="lazy">
              <source src={logoVideo} type="video/mp4" />
            </video>
          ) : (
            <img src={logoImage} alt="Santana's logo" loading="lazy" />
          )}
        </div>
      </div>
    </InitialPageContainer>
  );
};
