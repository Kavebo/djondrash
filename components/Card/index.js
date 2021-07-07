import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: darkgray;
  margin: 10px;
  padding: 5px;
  transition: all 0.15s linear;

  :hover {
    margin: 2px;
  }
`;

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
