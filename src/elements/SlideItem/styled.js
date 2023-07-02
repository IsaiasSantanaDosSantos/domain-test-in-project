import  styled  from "styled-components";

import * as colors from '../../config/colors'

export const RecomSlideItemContent = styled.div`
    .slide-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: grab;
    }
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
    a {
        text-decoration: none;
        color: ${colors.primaryColor};
        p {
            font-size: 13px;
            transition: all 0.5s;
        }
        :hover {
            transform: scale(1.1);
            font-weight: 600;
            text-decoration: underline;
        }
    }
    
`;