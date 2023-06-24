import { Link } from 'react-scroll';

import logoVideo from '../../assets/video/animateSantanaWebDeveloper.mp4'
import logoImage from '../../assets/img/santana_logo.jpg'
import { LogoBox } from './styled'

export const Logo = ()=>{

    const isVideoSupported = ()=>{
        const videoElement = document.createElement('video')
         return Boolean(videoElement.canPlayType)
    }


    return (
        <Link 
        activeClass="actived"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        >
            <LogoBox>
                {isVideoSupported() ? (
                    <video autoPlay loop muted>
                        <source src={logoVideo} type='video/mp4' />
                        Your browser does not support video in HTML 5
                    </video>
                ) : (
                    <img src={logoImage} alt="Santana's logo" />
                )}
            </LogoBox>
        </Link>
    )
}