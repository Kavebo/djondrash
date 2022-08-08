import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const EmailLink = styled.a`
  z-index: 10;
  min-height: 60px;
  color: #eadcca;
  font-size: 35px;
  margin: auto;
  font-family: 'Avenir Next';
  transition: all 0.15s linear;

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

export const Link = styled.a`
  height: 100%;
`;

export const DownloadLinkWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  height: 140px;
  transition: all linear 0.1s;

  :hover {
    padding-top: 10px;
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

export const Column = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  min-height: 90vh;
  z-index: 10;
`;

export const SignatureWrapper = styled.div`
  text-align: right;
  color: #eadcca;
  margin-bottom: 20px;
  margin-right: 20px;
  z-index: 10;
`;
