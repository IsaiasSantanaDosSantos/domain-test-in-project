import styled from "styled-components";

import * as colors from "../../config/colors";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 810px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  color: ${colors.whiteColor};
  overflow: hidden;

  .backgroundImage {
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .backgroundImage.image-transition {
    opacity: 0;
  }

  .homeMark {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.transpDarkColor};
    z-index: 0;
  }
  .homeContent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    padding-top: 200px;
  }
  .dinamicText {
    position: absolute;
    width: 100%;
    top: 280px;
    height: 145px;
    left: 0;
    text-align: center;
    font-size: 9em;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .focus {
    display: block;
    width: 20px;
    height: 90%;
    background: ${colors.whiteColor};
    animation: changeColor 0.7s infinite;
  }
  @keyframes changeColor {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .headerInfo {
    width: 100%;
    font-size: 1.8em;
    line-height: 1.8;
    text-align: center;
    margin-bottom: 35px;
  }
  .headerLink {
    color: ${colors.primaryColor};
    background: ${colors.secundaryColor};
    padding: 0.9em 2.6em;
    transition: all 0.5s ease;
    text-decoration: none;
    font-weight: 500;
    margin-bottom: 60px;
  }
  .headerLink:active {
    color: ${colors.whiteColor};
  }
  .headerLink:hover {
    filter: brightness(75%);
  }
  .homeIconBox {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    overflow: hidden;

    a {
      color: ${colors.whiteColor};
    }
    .arrowBtn {
      overflow: hidden;
      display: block;
      width: 0;
      height: 0;
    }
  }

  .homeIcon {
    font-size: 1.5em;
    animation: moveUpDown 2s infinite;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
  }

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(200%);
      opacity: 0;
    }
  }
  @media (max-width: 992px) {
    .dinamicText {
      top: 210px;
      font-size: 8em;
    }
    .homeContent {
      padding-top: 135px;
    }
  }
  @media (max-width: 830px) {
    .dinamicText {
      font-size: 5em;
    }
  }
  @media (max-width: 768px) {
    .homeContent {
      padding-top: 175px;
    }
    .dinamicText {
      top: 245px;
      height: 100px;
    }
    .headerInfo {
      font-size: 1.5em;
      margin-bottom: 45px;
    }
    .focus {
      width: 14px;
      height: 75%;
    }
  }
  @media (max-width: 576px) {
    .homeContent {
      padding-top: 280px;
    }
    .dinamicText {
      top: 350px;
      height: 75px;
      font-size: 2.6em;
    }
    .headerInfo {
      font-size: 1.3em;
      width: 90%;
    }
    .focus {
      width: 10px;
    }
  }
  @media (max-width: 348px) {
    height: 600px;
    .homeContent {
      padding-top: 100px;
    }
    .dinamicText {
      top: 155px;
      height: 55px;
      font-size: 2.3em;
    }
    .headerInfo {
      font-size: 1.2em;
      width: 90%;
    }
    .focus {
      width: 8px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  font-weight: 400;
  width: 100%;
  text-align: center;
  margin-bottom: 185px;

  @media (max-width: 992px) {
    margin-bottom: 170px;
  }
  @media (max-width: 768px) {
    margin-bottom: 130px;
  }
  @media (max-width: 576px) {
    margin-bottom: 120px;
    font-size: 1.5em;
  }
  @media (max-width: 310px) {
    font-size: 1.5em;
    margin-bottom: 70px;
  }
`;
