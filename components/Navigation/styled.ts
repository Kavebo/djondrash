import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 8vh;
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
  margin-left: 5%;
  width: 120px;
`;

export const RightSide = styled.div`
  display: flex;
  margin-right: 5%;
`;

export const NavBarWrapper = styled.div<{ $showNavbar?: boolean }>`
  width: 100%;
  max-width: 100vw;
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

  :hover {
    cursor: pointer;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 10px;
  margin-right: 5px;
  width: 40px;
  height: 40px;
  animation: drop-down 1s cubic-bezier(0.2, -2, 0.8, 2), show 1s ease-in;
  transition: all linear 0.1s;

  :last-child {
    margin-right: 0px;
  }

  :hover {
    margin-top: 15px;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) and (orientation: landscape) {
    width: 70px;
    height: 70px;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes drop-down {
    from {
      transform: translateY(-70px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;
