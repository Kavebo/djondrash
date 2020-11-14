import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media only screen and (min-width: 375px) and (orientation: landscape) {
    flex: 5;
  }

  @media only screen and (min-width: 700px) and (orientation: landscape) {
    flex: 7;
  }

  @media only screen and (min-width: 375px) and (min-height: 660px) {
    flex: 5;
  }

  @media only screen and (min-width: 768px) and (min-height: 1024px) {
    flex: 10;
  }

  @media only screen and (min-width: 768px) and (orientation: landscape) {
    flex: 10;
  }

  @media only screen and (min-width: 1000px) and (min-height: 1000px) {
    flex: 7;
  }

  @media only screen and (min-width: 1000px) and (min-height: 1300px) {
    flex: 15;
  }

  @media only screen and (min-width: 1000px) and (orientation: landscape) {
    flex: 15;
  }

  @media only screen and (min-width: 1500px) and (min-height: 1300px) {
    flex: 20;
  }
`;

export const MenuIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 10px;

  @media only screen and (min-width: 900px) {
    margin-left: 20px;
  }
`;

export const RightSide = styled.div`
  margin-right: 10px;

  @media only screen and (min-width: 800px) {
    margin-right: 20px;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;

  :hover {
    cursor: pointer;
  }

  ${() => {
    if (!isMobile) {
      return css`
        :hover {
          width: 60px;
          height: 60px;
        }
      `;
    }
  }}
`;

export const NavBarWrapper = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: ${({ $showNavbar }) => ($showNavbar ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 0;
  text-align: center;
  margin: 0;
  z-index: 10;
  animation: ease-i 0.5s;

  @keyframes ease-o {
    from {
      margin-top: 0;
    }
    to {
      margin-top: -250px;
    }
  }

  @keyframes ease-i {
    from {
      margin-top: -250px;
    }
    to {
      margin-top: 0;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: #eadcca;
    font-size: 20px;
    padding: 15px;

    :hover {
      background-color: #eadcca;
      color: black;
      cursor: pointer;
    }
  }
`;

export const MenuIconWrapper = styled.div`
  margin: 0 auto;
`;
