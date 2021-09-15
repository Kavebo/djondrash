import styled from 'styled-components';

export const BannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  min-height: 30px;
  background-color: rgb(0, 0, 0, 0.8);
  text-align: center;
  margin: auto;
  animation-name: slideIn;
  animation-duration: 1s;

  @keyframes slideIn {
    from {
      margin-bottom: -100%;
    }

    to {
      margin-bottom: 0%;
    }
  }
`;

export const CookieText = styled.p`
  margin: 2%;
  font-size: 17px;
  color: #eadcaa;
`;

export const CloseButton = styled.button`
  margin: 2%;
`;
