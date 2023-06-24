import styled from 'styled-components'
import * as colors from '../../config/colors';

export const Container = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.whiteColor};
border-bottom: 1px solid ${colors.primaryColor};
z-index: 10;
padding: 1px 0;

    .nav-container {
        max-width: 1100px;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      
    }
   
`;