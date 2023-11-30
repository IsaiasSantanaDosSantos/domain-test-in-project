import styled from 'styled-components'

import * as colors from '../../config/colors';

export const FooterContainer = styled.div`
width: 100%;
padding: 50px 20px;
color: ${colors.whiteColor};
background-color: ${colors.primaryColor};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
row-gap: 20px;
white-space: nowrap;
.container {
    max-width: 1100px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
img {
    width: 150px;
}
span {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    row-gap: 10px;
}
p {
    font-size: 16px;
}
.JesusPhrase {
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    width: auto;
    .JesusName {
        color: ${colors.secundaryColor};
        font-weight: 700;
        font-size: 14px;
    }
}
@media (max-width: 1300px){
    span{
        margin-right: 40px;
    }
}
@media (max-width: 992px){
    span{
        margin-right: 50px;
    }
}
@media (max-width: 768px){
    .container {
        flex-direction: column;
        row-gap: 20px;
    }
    span{
        margin-right: 0;
    }
}
@media (max-width: 576px){
    span{
        flex-direction: column;
    }
}
@media (max-width: 360px){
    span{
        margin-right: 35px;
    }
}
@media (max-width: 360px){
    span{
        margin-right: 55px;
    }
}
`;