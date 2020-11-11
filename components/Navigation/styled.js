import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5%;
  padding-top: 50px;

  @media only screen and (max-width: 600px) {
    margin: unset;
    padding-top: 0px;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 140px;

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;
