import styled from 'styled-components'

import * as colors from '../../config/colors'

export const Menu = styled.div`
width: 30px;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
row-gap: 7px;

    .menuMobileBars{
        width: 100%;
        height: 3px;
        border-radius: 20px;
        background: ${colors.primaryColor};
    }
`;