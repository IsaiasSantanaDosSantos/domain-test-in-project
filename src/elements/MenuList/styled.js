import styled from "styled-components";

import * as colors from "../../config/colors";

export const ListDestop = styled.ul`
  list-style: none;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;

  li {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 5px;
    transition: all 0.3ms;
    cursor: pointer;
  }
  li a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  .hoverTo,
  .actived {
    position: relative;
  }

  .hoverTo::after,
  .actived::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background-color: ${colors.secundaryColor};
    transition: width 0.3s;
  }
  .hoverTo:hover::after,
  .actived:hover::after {
    width: 100%;
  }
  .actived::after {
    position: absolute;
    width: 100%;
    top: 26px;
  }
  @media (max-width: 992px) {
    position: absolute;
    top: 63px;
    left: 0;
    width: 100%;
    height: 100vh;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    row-gap: 15px;
    z-index: 2;
    padding-left: 40px;
    padding-top: 20px;
    background-color: ${colors.transpDarkColor};
    backdrop-filter: blur(2.5px);

    li {
      color: ${colors.whiteColor};
    }
  }
`;
