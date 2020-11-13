import styled, { css } from 'styled-components';

import background1 from '../../assets/images/background1.jpg';

export const Wrapper = styled.div`
  margin: 0;
  background: url(${background1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 140vh;

  @media only screen and (min-width: 600px) {
    margin: 5px 15px 5px 10px;
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  margin: 25vh 0px 0px 0px;
  font-size: 14px;

  @media only screen and (min-width: 375px) {
    margin-top: 50vh;
  }

  @media only screen and (min-width: 600px) {
    margin-top: 60vh;
    flex-direction: row;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-top: 70vh;
    margin: 0 5%;

    p {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 1000px) {
    margin-top: 80vh;
  }

  @media only screen and (min-height: 750px) and (min-width: 1100px) {
    margin-top: 60vh;
  }
`;

export const Column = styled.div`
  display: block;
  flex: 1;
  margin: 0 5%;
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
  width: 100px;

  @media only screen and (min-width: 600px) {
    width: 200px;
  }
`;
