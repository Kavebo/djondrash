import styled, { css } from 'styled-components';

import background from '../../assets/images/background1.jpg';

export const Wrapper = styled.div`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 140vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 1200px) {
    margin: 5px;
  }
`;

export const InfoWrapper = styled.div`
  flex: 10;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 14px;

  @media only screen and (min-width: 550px) and (orientation: landscape) {
    flex-direction: row;
    justify-content: space-between;
    font-size: 11px;

    p {
      padding: 0px;
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 600px) and (orientation: landscape) {
    flex-direction: row;
    justify-content: space-between;

    p {
      padding: 0px;
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 600px) and (min-height: 660px) {
    flex-direction: row;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1000px) and (orientation: landscape) {
    font-size: 18px;
  }
`;

export const Column = styled.div`
  display: block;
  flex: 1;
  margin: 0 20px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Separator = styled.p`
  margin-top: 88px;
  display: none;

  @media only screen and (min-width: 600px) {
    display: block;
  }
`;

export const Text = styled.p`
  color: #eadcca;
  text-align: justify;
  margin: 22px 0;

  @media only screen and (max-width: 400px) {
    margin: 10px 0;
  }

  ${({ $hideInMobile }) => {
    if ($hideInMobile) {
      return css`
        @media only screen and (max-width: 600px) {
          display: none;
        }
      `;
    }
  }}
`;

export const TextBold = styled(Text)`
  font-family: 'Avenir Next Bold';
  font-size: 17px;
  margin-right: 5px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  text-align: right;
`;

export const LogoImage = styled.img`
  width: 40%;
  height: 20%;
`;
