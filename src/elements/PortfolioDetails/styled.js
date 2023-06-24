import  styled  from "styled-components";

import * as colors from '../../config/colors'

export const PortfolioDetailsContent = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 10;
background-color: ${colors.transpDarkColor};
display: flex;
justify-content: center;
align-items: center;
    .windowDetailsCard {
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${colors.whiteColor};
        padding: 20px;
    }
    .closedWindow {
        width: 100%;
        display: block;
        text-align: end;
        .windowIcon {
            font-size: 25px;
            cursor: pointer;
            transition: all 0.5s;
        }
        .windowIcon:hover {
            transform: scale(1.2);
        }
        .windowIcon:active {
            transform: rotate(-15deg);
        }
    }
    .windowCartContent {
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        column-gap: 15px;
    }
    .imageBox{
        position: relative;
        width: 58%;
        height: 350px;
    }
    .backgroundImage {
        width: 100%;
        height: 100%;
        background-position: center center;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        
    }
    .windowInfo {
        width: 38%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
    .windowTitle {
        font-weight: 600;
        margin-bottom: 15px;
        text-transform: uppercase;
        border-bottom: 2px solid ${colors.secundaryColor};
    }
    .windowDescription {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
    .descriptionText {
        font-size: 15px;
        margin-bottom: 10px;
        line-height: 25px;
    }
    .windowBtnBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
    .windowBtnBox a {
        text-decoration: none;
        font-weight: 600;
        background-color: ${colors.secundaryColor};
        color: ${colors.primaryColor};
        padding: 3px 10px;
        transition: all 0.5s;
    }
    .windowBtnBox a:hover {
        background-color:${colors.primaryColor};
        color:  ${colors.secundaryColor};
    }
    .windowBtnBox a:active {
        filter: brightness(55%);
    }

    @media (max-width: 992px){
        padding-top: 20px;

        .windowCartContent {
            flex-direction: column;
        }
        .imageBox {
            max-width: 650px;
            width: 95%;
            margin-bottom: 20px;
        }
        .windowInfo {
            max-width: 650px;
            width: 95%;
            align-items: center;
        }
        .windowTitle {
            text-align: center;
        }
        .windowDescription{
            width: 100%;
            align-items: center;
        }
        .descriptionText {
            text-align: center;
        }
        .windowBtnBox {
            justify-content: space-around;
        }
    }
    @media (max-width: 768px){
        .imageBox {
            height: 225px;
        }
    }
    @media (max-width: 576px){
        .imageBox {
            height: 165px;
        }
    }
`;