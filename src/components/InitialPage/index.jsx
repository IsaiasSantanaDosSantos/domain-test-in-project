import { InitialPageContainer } from "./styled";
import logoVideo from '../../assets/video/blackWebDeveloperLogoAnimation.mp4'
import logoImage from '../../assets/img/santana_logo.jpg'

export const InicialPage = () => {
    const isVideoSupported = ()=>{
        const videoElement = document.createElement('video')
         return Boolean(videoElement.canPlayType)
    }

    return (
        <InitialPageContainer>
            <div className="interBox">
                <div className="logoBox">
                {isVideoSupported() ? (
                    <video autoPlay loop muted>
                        <source src={logoVideo} type='video/mp4' />
                        Your browser does not support video in HTML 5
                    </video>
                ) : (
                    <img src={logoImage} alt="Santana's logo" />
                )}
                    <p className="loadindTex">Loading<span></span><span></span><span></span></p>
                </div>
            </div>
        </InitialPageContainer>
    )
}