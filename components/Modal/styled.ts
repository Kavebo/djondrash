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
  background-color: rgba(0, 0, 0, 0.8);
  color: #eadcca;
  width: 500px;
  height: 300px;
  border-radius: 15px;
  padding: 15px;
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
