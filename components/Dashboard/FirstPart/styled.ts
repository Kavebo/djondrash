import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  flex: 10;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 10px;

  @media only screen and (min-width: 550px) and (orientation: landscape) {
    flex-direction: row;
    justify-content: space-between;
    font-size: 10px;

    p {
      margin-bottom: 10px;
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

  @media only screen and (min-width: 1000px) {
    p {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 1400px) {
    p {
      font-size: 25px;
    }
  }
`;

export const Column = styled.div<{ $isPortraitMode?: boolean }>`
  display: block;
  flex: 1;
  margin-left: 5%;
  margin-right: 5%;
  animation: left-right 1s cubic-bezier(0.2, -2, 0.8, 2), show 1s ease-in;
  transition: all linear 0.1s;

  ${({ $isPortraitMode }) => {
    if ($isPortraitMode) {
      return css`
        margin-bottom: 5%;
      `;
    }
  }}

  @keyframes left-right {
    from {
      transform: translateX(-70px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;

export const MainColumn = styled.div`
  display: block;
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
`;

export const TextInOneRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Text = styled.p<{ $hideInMobile?: boolean }>`
  color: #eadcca;
  text-align: justify;
  margin: 0;

  :first-child {
    margin-right: 5px;
  }

  @media only screen and (min-width: 1000px) {
    margin-bottom: 10px;
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
  width: 40%;
  margin-left: auto;
`;
