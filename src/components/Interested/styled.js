import  styled  from "styled-components";

import * as colors from '../../config/colors'

export const InterestedContent = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
overflow: hidden;

    .backgroundImage {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 1;
        transition: transform 0.2s ease-out;
    }
    .backgroundMask{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: ${colors.transpDarkColor};
    } 
  

    .interestedContent {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 1;
    }
    .interestedTitle {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 45px;
        text-align: center;
        color: ${colors.whiteColor};
    }
    .interestedLink {
        font-weight: 500;
        padding: 0.8rem 2.6rem;
        color: ${colors.primaryColor};
        background-color: ${colors.secundaryColor};
        cursor: pointer;
    }
    .interestedLink:hover {
        color: ${colors.secundaryColor};
        background-color: ${colors.primaryColor};
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