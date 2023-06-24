import  styled  from "styled-components";

import * as colors from '../../config/colors'

export const AboutContent = styled.div`
width: 100%;
padding: 40px 0;
display: flex;
flex-direction: column;
align-items: center;

    h1{
        font-size: 16px;
        font-weight: normal;
        color: ${colors.primaryColor};
        background: ${colors.secundaryColor};
        padding:  0 8px;
        text-align: center;
        margin-bottom: 20px;
    }
    .subTitle {
        color:  ${colors.blackColor};
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 45px;
        text-align: center;
    }
    .about-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: start;
        column-gap: 50px;
        margin-bottom: 40px;
    }
    .about-texts {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
    .main-text {
        font-size: 2em;
        margin-bottom: 16px;
    }
    .my-name {
        font-weight: bold;
        border-bottom: 3px solid ${colors.secundaryColor};
    }
    .normal-text {
        font-size: 18px;
        margin-bottom: 15px;
        line-height: 28px;
        font-weight: normal;
    }
    .about-experience {
        width: 26%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 20px;
    }
    .experience-number {
        font-size: 144px;
        line-height: 175px;
        font-weight: 500;
        position: relative;
        z-index: 1;
    }
    .experience-circle {
        position: absolute;
        top: 15%;
        bottom: 15%;
        right: 15%;
        left: 15%;
        background: ${colors.secundaryColor};
        border-radius: 50%;
        z-index: -1;
    }
    .experience-text {
        font-size: 28px;
        font-weight: normal;
        white-space: nowrap;
    }
    .experience-text span {
        font-weight: 700;
    }
    .about-contact {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: start;

        p {
            font-size: 16px;
            color: ${colors.primaryColor};
            font-weight: 400;

            span {
                font-size: 18px;
                font-weight: 600;
                
                a {
                    color: ${colors.primaryColor};
                }
                .loacation {
                    text-decoration: none;
                }
                a:hover, .loacation:hover {
                    color: ${colors.secundaryColor};
                }
            }
        }
    }
    .fade-up {
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.8s ease, opacity 0.8s ease;
    }
    
    .fade-up.animate {
        transform: translateY(0);
        opacity: 1;
    } 
   

    @keyframes zoomAnimation {
            0% {
            transform: scale(0.9);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(0.9);
        }
    }
    .zoom {
        transform: translateY(80px);
        transition: transform 0.8s ease, opacity 0.8s ease;
        z-index: 2;
    }
    .zoom.zoomAnimate {
        display: inline-block;
        position: relative;
        transform: translateY(0);
        animation: zoomAnimation 2s ease 0.5s forwards;
    }
    

    @media (max-width: 992px){
        .about-content {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 40px;
        }
        .about-texts {
            align-items: center;
        }
        .main-text, .normal-text {
            text-align: center;
        }
        .about-contact p {
            width: 50%;
        }
    }
    @media (max-width: 768px){
        .about-contact {
            flex-direction: column;
            align-items: center;
        }
        .about-contact p {
            width: 100%;
            text-align: center;
            margin-bottom: 15px;
        }
    }
    @media (max-width: 576px){
        .experience-number {
            font-size: 90px;
            line-height: 108px;
        }
        .experience-text {
        font-size: 25px;
        white-space: break-spaces;
        text-align: center;
        }
        .about-contact p span{
            font-size: 15px;
        }
    }
`;