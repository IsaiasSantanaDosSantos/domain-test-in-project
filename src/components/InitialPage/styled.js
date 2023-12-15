import { styled } from "styled-components";
import * as colors from "../../config/colors"

export const InitialPageContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 11;
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.whiteColor};
    .interBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        overflow: hidden;
        background-color: ${colors.primaryColor};
        /* animation: initialAnimation 2s; */
        animation: initialAnimation .40s ease forwards, expandAnimation .20s ease forwards 2s;
    }
    .loadindTex {
        color: ${colors.whiteColor};
        margin: -60px auto 15px auto;
        display: flex;
        justify-content: center;
        align-items: end;
    }

    .logoBox {
        background: transparent;
        height: 160px;
        max-width: 200px;
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        
        video{
            width: 100%;
        }
    
    }
    .loadindTex span {
        width: 5px;
        height: 5px;
        background-color: ${colors.whiteColor};
        margin-left: 5px;
        border-radius: 50%;
        margin-bottom: 3px;
    }
    .loadindTex span:nth-child(1) {
    animation: moveUpDown 1s infinite 0s;
    }

    .loadindTex span:nth-child(2) {
    animation: moveUpDown 1s infinite 0.2s;
    }

    .loadindTex span:nth-child(3) {
    animation: moveUpDown 1s infinite 0.4s;
    }
    .logoBox {
        opacity: 0;
        animation: showLogo 1s ease 2s forwards;
    }

    @keyframes initialAnimation {
        0% {
            height: 3px;
        }
        100% {
            height: 100%;
            border-radius: 20px;
        }
    }
    @keyframes expandAnimation {
        0% {
            width: 3px;
            border-radius: 0;
        }
        100% {
            width: 100%;
            border-radius: 0;
        }
    }
    @keyframes showLogo {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    
    @keyframes moveUpDown {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
        100% {
            transform: translateY(0);
        }
    }  
`;