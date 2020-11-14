import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';

import background from '../../assets/images/background3.jpg';

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

export const EmailLink = styled.a`
  color: #eadcca;
  font-size: 35px;
  margin: auto;
  font-family: 'Avenir Next';

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 25px;
  }
`;

export const SocialIconWrapper = styled.div`
  width: 80px;

  @media only screen and (min-width: 1000px) {
    width: 120px;
  }
`;

export const Img = styled.img`
  width: 40px;

  @media only screen and (min-width: 700px) {
    width: 80px;
  }

  ${() => {
    if (!isMobile) {
      return css`
        :hover {
          width: 70px;
        }

        @media only screen and (min-width: 700px) and (min-height: 600px) {
          :hover {
            width: 90px;
            height: 90px;
          }
        }
      `;
    }
  }}
`;

export const Link = styled.a``;

export const DownloadIcon = styled.img`
  width: 70px;
  margin: auto;

  @media only screen and (min-width: 700px) {
    width: 120px;
  }
`;

export const Row = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;

  @media only screen and (mix-width: 800px) {
    min-height: 100px;
  }
`;

export const DownloadLinkWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

export const IconsWrapper = styled(Row)`
  width: 50%;

  @media only screen and (max-width: 700px) {
    width: 70%;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 90%;
`;

export const SignatureWrapper = styled.div`
  text-align: right;
  color: #eadcca;
  margin-bottom: 20px;
  margin-right: 20px;
`;
