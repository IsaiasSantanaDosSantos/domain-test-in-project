import  styled  from "styled-components";

import * as colors from '../../config/colors'

export const ResumeContent = styled.div`
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
    .resume-content {
        display: flex;
        justify-content: space-between;
        align-items: start;
        column-gap: 40px;
        margin-bottom: 80px;
    }
    .resume-columnOne{
        width: 46%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        position: relative;
        padding-left: 20px;
    }
    .resume-columnTitle {
        font-weight: 600;
        font-size: 1.75rem;
        margin-bottom: 15px;
        margin-left: -20px;
    }
    .columnOneBar {
        position: absolute;
        top: 82px;
        bottom: 0;
        left: 0;
        width: 2px;
        background-color: ${colors.secundaryColor};
    }
    .resume-columnItems {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        border-bottom: 1px solid ${colors.grayColor};
        padding-top: 15px;
    }
    .columnItemTitles {
        font-size: 21px;
        font-weight: 500;
        margin-bottom: 10px;
        color: ${colors.primaryColor};
    }
    .column-institute {
        font-size: 16px;
        margin-bottom: 10px;
        color: ${colors.primaryColor};
    }
    .column-description {
        font-size: 16px;
        margin-bottom: 15px;
        color: ${colors.primaryColor};
    }
    .resume-columnTwo {
        width: 46%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        position: relative;
        padding-left: 20px;
    }
    .resumeSkills {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .skillTitle {
        font-weight: 600; 
        font-size: 1.75rem;
        padding-bottom: 1em;
        text-align: center;
    }
    .skillBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: start;
    }
    .skillColumns {
        width: 46%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 50px;
    }
    .skillItems {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 25px;
    }
    .skillItemsHeader {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: start;
    }
    .skillItemsHeader p {
        font-weight: 500;
        margin-bottom: 0.5rem;
        line-height: 1.8;
    }
    .skillOneBar {
        width: 100%;
        height: 8px;
        border-radius: 20px;
        position: relative;
        background-color: ${colors.grayColor};
        overflow: hidden;
        span {
            position: absolute;
            top: 0;
            left: -1px;
            bottom: 0;
            width: 70%;
            background-color: ${colors.secundaryColor};
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
    }
    .skillTwoBar {
        width: 100%;
        height: 8px;
        border-radius: 20px;
        position: relative;
        background-color: ${colors.grayColor};
        overflow: hidden;

        span {
            position: absolute;
            top: 0;
            left: -1px;
            bottom: 0;
            width: 85%;
            background-color: ${colors.secundaryColor};
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
    } 
    .skillThreeBar
    {
        width: 100%;
        height: 8px;
        border-radius: 20px;
        position: relative;
        background-color: ${colors.grayColor};
        overflow: hidden;
        span {
            position: absolute;
            top: 0;
            left: -1px;
            bottom: 0;
            width: 70%;
            background-color: ${colors.secundaryColor};
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
    }
     .skillFourBar {
        width: 100%;
        height: 8px;
        border-radius: 20px;
        position: relative;
        background-color: ${colors.grayColor};
        overflow: hidden;
        span {
            position: absolute;
            top: 0;
            left: -1px;
            bottom: 0;
            width: 90%;
            background-color: ${colors.secundaryColor};
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
    }
    .skillFiveBar
    {
        width: 100%;
        height: 8px;
        border-radius: 20px;
        position: relative;
        background-color: ${colors.grayColor};
        overflow: hidden;
        span {
            position: absolute;
            top: 0;
            left: -1px;
            bottom: 0;
            width: 90%;
            background-color: ${colors.secundaryColor};
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
    } .skillSixBar {
        width: 100%;
        height: 8px;
        border-radius: 20px;
        position: relative;
        background-color: ${colors.grayColor};
        overflow: hidden;
        span {
            position: absolute;
            top: 0;
            left: -1px;
            bottom: 0;
            width: 60%;
            background-color: ${colors.secundaryColor};
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
    }
    .downloadBtnBox {
        width: 100%;
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        margin-bottom: 60px;
        column-gap: 40px;
        row-gap: 30px;
    }
    .cvBox {
        width: 280px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        column-gap: 40px;
        row-gap: 20px;
    }
    .downloadResume {
        text-decoration: none;
        color: ${colors.primaryColor};
        border: 2px solid;
        padding: 12px 48px;
        font-weight: 500;
        transition: all .5s ease;
    }
    .downloadResume:hover {
        color: ${colors.whiteColor};
        background-color: ${colors.primaryColor};
        border: 2px solid ${colors.primaryColor};
    }
    .downloadResume:active {
        filter: brightness(75%);
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
        .resume-content {
            flex-direction: column;
            align-items: center;
        }
        .resume-columnOne {
            width: 95%;
            margin-bottom: 60px;
        }
         .resume-columnTwo {
            width: 95%;
        }
    }
    @media (max-width: 768px){
        .skillBox {
            flex-direction: column;
            align-items: center;
        }
        .resumeSkills {
            margin-bottom: 50px;
        }
        .skillColumns {
            width: 95%;
            margin-bottom: 0;
        }
        .downloadBtnBox {
            flex-direction: column;
        }
    }
    @media (max-width: 640px){
        .boxLink {
            flex-direction: column;
            row-gap: 100px;
        }
        .boxButton {
            flex-direction: column;
            row-gap: 70px;
            margin-top: -142px;
        }
    }
    @media (max-width: 477px){
        .columnOneBar {
                top: 121px;
        }
    }
`;