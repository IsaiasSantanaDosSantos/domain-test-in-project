import  styled  from "styled-components";

import * as colors from '../../config/colors'

export const ServicesContent = styled.div`
width: 100%;
padding: 50px 0;
display: flex;
flex-direction: column;
align-items: center;
/* background: ${colors.grayColor}; */
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
    .services-cards-box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: start;
        column-gap: 50px;
        margin-bottom: 40px;
        row-gap: 60px;
        column-gap: 40px;
    }
    .services-cards {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    .services-icons {
        font-size: 50px;
        color: ${colors.secundaryColor};
        margin-bottom: 15px;
    }
    .services-cards-title {
        font-weight: 600;
        font-size: 22px;
        margin-bottom: 15px;
        text-align: center;
    }
    .services-cards-text {
        font-size: 18px;
        text-align: center;
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
    
    @media (max-width: 992px){
        .services-cards {
        width: 45%;
        }
       
    }
    @media (max-width: 768px){
       
    }
    @media (max-width: 576px){
        .services-cards {
        width: 95%;
        }
        .subTitle {
        font-size: 33px;
        line-height: 38px;
        }
        .services-cards-title {
        font-size: 19px;
        }
        .services-cards-text {
        font-size: 16px;
        }
    }
`;