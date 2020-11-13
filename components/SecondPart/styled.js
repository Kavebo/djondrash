import styled from 'styled-components';

import background from '../../assets/images/background2.jpg';

export const Wrapper = styled.div`
  margin: 5px 15px 5px 10px;
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 140vh;

  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  display: block;
  margin: 5% auto;
  width: 60%;
  height: 30%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
