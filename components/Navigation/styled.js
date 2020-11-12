import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0px;

  @media only screen and (max-width: 600px) {
    margin: unset;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 140px;

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

export const MenuIcon = styled.img`
  width: 100px;
  height: 50px;

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

export const NavBarWrapper = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  text-align: center;
  margin: 0;
  z-index: 10;

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

  ${({ $showNavbar }) => {
    if ($showNavbar) {
      return css`
        animation: ease-i 0.5s;
        display: flex;
      `;
    }

    return css`
      animation: ease-o 0.5s;
    `;
  }}

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
