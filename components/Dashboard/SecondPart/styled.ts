import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
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
