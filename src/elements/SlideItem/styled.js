import  styled  from "styled-components";

import * as colors from '../../config/colors'

export const RecomSlideItemContent = styled.div`

    a {
        text-decoration: none;
        color: ${colors.primaryColor};
            /* width: 100%; */
            flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 70px;
            border-radius: 50%;
            margin-bottom: 10px;
        }
        .slide-name {
            font-weight: 600;
            font-size: 16px;
        }
        .slide-position{
            font-size: 13px;
            margin-bottom: 20px;
        }
        .slide-description{
            text-align: center;
            margin-bottom: 15px;
        }
        .slide-source {
            font-size: 13px;
        }
    }
    
`;