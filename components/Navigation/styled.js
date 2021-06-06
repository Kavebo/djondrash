import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
`;

export const MenuIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  width: 120px;
`;

export const RightSide = styled.div`
  margin-right: 5%;
  width: 50px;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  transition: all 0.15s linear;

  :hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) and (orientation: landscape) {
    width: 70px;
    height: 70px;
  }

  ${() => {
    if (!isMobile) {
      return css`
        :hover {
          width: 60px;
          height: 60px;
        }

        @media only screen and (min-width: 768px) and (orientation: landscape) {
          :hover {
            width: 80px;
            height: 80px;
          }
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

export const ImageWrapper = styled.div`
  width: 70px;
`;
