import  styled  from "styled-components";

import * as colors from '../../config/colors'

export const ContactContent = styled.div`
width: 100%;
display: block;
text-align: center;
background-color: ${colors.secundaryColor};
color: ${colors.primaryColor};
padding: 80px 0;

.contactConatiner{
    max-width: 1100px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
    column-gap: 30px;
    row-gap: 40px;
}
.contactTextBox, .contactFormBox {
    width: 47%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}
.contactTextTitle {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
}
.contactText {
    font-size: 16px;
    text-align: start;
    line-height: 30px;
}
.contactSubTitle {
    margin-top: 15px;
}
a {
    color: ${colors.primaryColor};
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
.contactIconsBox {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 15px;
    margin-top: 20px;
}
.contactIcons {
    font-size: 30px;
    cursor: pointer;
    animation: zoomAnination ease 2.5s infinite;
}
.contactIcons:hover {
    opacity: 0.8;
}
@keyframes zoomAnination {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
form {
    width: 100%;
}

label {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-bottom: 20px;
    input[type="text"] {
        width: 100%;
        border: none;
        outline: none;
        border-bottom: 1px solid ${colors.darkGrayColor};
        background-color: ${colors.secundaryColor};
        height: 40px;
    }
}
 textarea {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid ${colors.darkGrayColor};
    background-color: ${colors.secundaryColor};
    height: 60px;
}
button {
    border: none;
    background-color: ${colors.primaryColor};
    color: ${colors.secundaryColor};
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: 10px 40px;
    column-gap: 5px;
    margin: 30px auto 5px;
    cursor: pointer;
    transition: all 0.5s;
}
button:hover {
    background-color: ${colors.secundaryColor};
    color: ${colors.primaryColor};
    border: 1px solid ${colors.primaryColor};
}
button:active {
    filter: brightness(75%);
}
.errorMsg {
    text-align: center;
    font-size: 13px;
    font-weight: 600;
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
@media (max-width: 768px){
    .contactConatiner{
        flex-direction: column;
    }
    .contactTextBox, .contactFormBox {
    width: 100%;
    }
}
@media (max-width: 576px){
    .contactTextBox, .contactFormBox, label {
        align-items: center;
    }
    .contactText {
        text-align: center;
    }
    .contactIconsBox {
        justify-content: center;
    }
}
`;