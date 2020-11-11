import React from 'react';

import players from '../../assets/images/Gramce_playery.svg';
import { ImageWrapper, Img, Wrapper } from './styled';

const SecondPart = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Img src={players} />
      </ImageWrapper>
    </Wrapper>
  );
};
export default SecondPart;
