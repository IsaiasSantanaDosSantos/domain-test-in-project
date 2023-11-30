import  styled  from "styled-components";

import * as colors from '../../config/colors';

export const SuccessContent = styled.div`
position: fixed;
z-index: 10;
left: 0;
top: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.transpDarkColor};
.successConteiner {
    max-width: 500px;
    width: 90%;
    height: auto;
    padding: 20px 30px;
    background-color: ${colors.whiteColor};
    color: ${colors.primaryColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.successClosed {
    width: 100%;
    display: block;
    text-align: end;
}
.closedIcon {
    font-size: 25px;
    transition: all 0.5s;
    cursor: pointer;
}
.closedIcon:hover {
    transform: scale(1.1);
}
.closedIcon:active {
    transform: rotate(-15deg);
}
.content {
    display: block;
    text-align: center;
}
.successTitle {
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 15px;
}
.successText {
    text-align: center;
    font-size: 16px;
}
.successIconBox {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
video {
    width: 100%;
}


`;