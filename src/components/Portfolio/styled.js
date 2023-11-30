import  styled  from "styled-components";

import * as colors from '../../config/colors'

export const PortfolioContent = styled.div`
width: 100%;
padding: 40px 0;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 100px;

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
    .portfolio-content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        column-gap: 40px;
        row-gap: 60px;
    }
    .portfolio-card {
        width: 300px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 18px -7px ${colors.transpDarkColor};
        transition: 0.5s;
        position: relative;
    }
    .backgroundImage {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* opacity: 0.5; */
        filter: brightness(55%);
        transition: 0.5s;
    }
    
    .card-content{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: start;
        padding-top: 30px;
        z-index: 1;
    }
    .card-title {
        font-size: 17px;
        text-transform: uppercase;
        color: ${colors.whiteColor};
        text-align: center;
        font-weight: 600;
        transition: 0.5s;
        /* background-color: ${colors.secundaryColor}; */
        line-height: 22px;
        padding: 0 5px;
    }
    .card-aba {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        padding: 5px 15px;
        background-color: ${colors.grayColor};
        transition: 0.5s;
        opacity: 0;
        box-shadow: 2px 6px 18px -11px ${colors.transpDarkColor};
    }
    .goToDetailsBtn {
        background-color: ${colors.secundaryColor};
        padding: 3px 8px;
        font-weight: 600;
        color: ${colors.primaryColor};
        cursor: pointer;
        transition: 0.5s;
    }
    .goToDetailsBtn:hover {
        color: ${colors.secundaryColor};
        background-color: ${colors.primaryColor};
    }
    .goToDetailsBtn:active {
      filter: brightness(75%);
    }

    .portfolio-card:hover {
        transform: scale(1.1);
        .backgroundImage {
            filter: brightness(100%);
        }
        .card-title {
            opacity: 0;
        }
        .card-aba {
            margin-bottom: -38px;
            animation: show-aba 1s ease  forwards;
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

    @keyframes show-aba {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.1;
        }
        50% {
            opacity: 0.2;
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width: 992px){
        .portfolio-content {
            flex-wrap: wrap;
            align-items: center;
        }
        .portfolio-card {
            width: 46%;
        }
        
    }
    @media (max-width: 576px){
        .subTitle {
            font-size: 25px;
        }
        .portfolio-content {
            flex-direction: column;
        }
        .portfolio-card {
            max-width: 380px;
            width: 90%;
        }
    }
`;