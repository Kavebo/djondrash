import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';

import backgroundPhone from '../../assets/images/background3_phone.jpg';

export const Wrapper = styled.div`
  background: url(${backgroundPhone});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const EmailLink = styled.a`
  min-height: 60px;
  color: #eadcca;
  font-size: 35px;
  margin: auto;
  font-family: 'Avenir Next';

  :hover {
    font-size: 37px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 30px;

    :hover {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 700px) {
    font-size: 25px;

    :hover {
      font-size: 27px;
    }
  }
`;

export const SocialIconWrapper = styled.div`
  width: 80px;

  @media only screen and (min-width: 1000px) {
    width: 120px;
  }
`;

export const Img = styled.img`
  width: fit-content;
  max-width: 80px;

  ${() => {
    if (!isMobile) {
      return css`
        :hover {
          margin-top: 10px;
        }

        @media only screen and (min-width: 700px) and (min-height: 600px) {
          :hover {
            margin-top: 10px;
          }
        }
      `;
    }
  }}
`;

export const Link = styled.a`
  height: 100%;
`;

export const DownloadLinkWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  height: 140px;
`;

export const DownloadIcon = styled.img`
  width: 70px;
  margin: auto;

  :hover {
    width: 80px;
  }

  @media only screen and (min-width: 700px) {
    width: 120px;

    :hover {
      width: 130px;
    }
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

export const IconsWrapper = styled(Row)`
  height: 100px;
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
