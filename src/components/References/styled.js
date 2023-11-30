import  styled  from "styled-components";

import * as colors from '../../config/colors'

export const ReferencesContent = styled.div`
max-width: 1100px;
width: 90%;
margin: 0 auto;
padding: 80px 0 120px;
display: flex;
flex-direction: column;
align-items: center;

    h1{
        /* width: auto; */
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
    .slick-slider {
            width: 100%;
    }
    .slick-dots li button:before {
        font-size: 15px;
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

`;