import styled from 'styled-components';

import background1 from '../../assets/images/background1.jpg';

export const Wrapper = styled.div`
  background: url(${background1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 140vh;
`;

export const InfoWrapper = styled.div`
  position: relative;
  top: 35%;
  display: flex;
  justify-content: space-between;
  margin: 5%;

  @media only screen and (max-width: 700px) {
    top: 28%;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    top: 20%;
  }

  @media only screen and (max-width: 520px) {
    top: 0%;
  }

  @media only screen and (max-width: 375px) {
    p {
      font-size: 14px;
    }
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

  @media only screen and (max-width: 600px) {
    margin-top: 15px;
  }
`;

export const Text = styled.p`
  color: #eadcca;
  text-align: justify;
  margin: 22px 0;

  @media only screen and (max-width: 400px) {
    margin: 10px 0;
  }
`;

export const TextBold = styled(Text)`
  font-family: 'Avenir Next Bold';
  font-size: 17px;
`;

export const LogoWrapper = styled.div`
  position: relative;
  top: 30%;
  width: 100%;
  text-align: right;
  padding-right: 20%;

  @media only screen and (max-width: 760px) {
    top: 25%;
    padding-right: 15%;
  }

  @media only screen and (max-width: 700px) {
    top: 17%;
  }

  @media only screen and (max-width: 520px) {
    top: 5%;
  }

  @media only screen and (max-width: 375px) {
    top: 0%;
    width: 100%;
    text-align: center;
    padding-right: 0;
  }
`;
