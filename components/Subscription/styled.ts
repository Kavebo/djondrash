import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  margin: 0 10px 10px 0;
  text-align: center;
  font-size: 20px;
  color: white;

  @media only screen and (min-width: 550px) {
    font-size: 25px;
  }
`;

export const Label2 = styled.p`
  text-align: center;
  font-size: 20px;
  color: #eadcca;

  @media only screen and (min-width: 550px) {
    font-size: 23px;
    margin-right: 5%;
  }
`;

export const EmailInput = styled.input`
  width: 80%;
  margin: 5px;
  font-size: 17px;

  @media only screen and (min-width: 550px) {
    width: 80%;
    font-size: 20px;
  }
`;

export const SubscribeButton = styled.button`
  background-color: #eadcca;
  font-weight: bold;
  width: 80%;
  font-size: 20px;

  @media only screen and (min-width: 768px) {
    width: 30%;
    font-size: 20px;
  }
`;

export const LogoImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;

  @media only screen and (min-width: 550px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 5% auto;

  @media only screen and (min-width: 767px) {
    flex-direction: row;
    max-width: 90%;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 70%;
  }
`;
