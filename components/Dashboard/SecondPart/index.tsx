import React from 'react';
import Image from 'next/image';

import players from '../../../assets/images/Gramce_playery.svg';
import { ImageWrapper, Img, Wrapper } from './styled';
import backgroundImage from '../../../assets/images/background2_phone.jpg';

const SecondPart = () => {
  return (
    <Wrapper>
      <Image src={backgroundImage} alt="background" layout="fill" objectFit="cover" />
      <ImageWrapper>
        <Image src={players} alt="player" />
      </ImageWrapper>
    </Wrapper>
  );
};
export default SecondPart;
