import styled from 'styled-components';

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
`;

export const EmailLink = styled.a`
  color: #eadcca;
  font-size: 55px;
  margin: auto;
  font-family: 'Avenir Next';

  @media only screen and (max-width: 1000px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }
`;

export const Img = styled.img``;

export const Link = styled.a`
  width: 100px;
`;

export const DownloadIcon = styled.img`
  width: 150px;
  margin: auto;
`;

export const Row = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  padding: 10% 0 0 0;
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
