import styled from 'styled-components';

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalTitle = styled.h1`
  text-align: center;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 20%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #eadcca;
  width: 90%;
  height: 300px;
  border-radius: 15px;
  padding: 5px 15px;
  animation-name: slideIn;
  animation-duration: 1s;

  @media only screen and (min-width: 550px) {
    width: 60%;
  }

  @keyframes slideIn {
    from {
      margin-top: -100%;
    }

    to {
      margin-top: 0%;
    }
  }
`;
export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
