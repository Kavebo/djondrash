import React, { useEffect } from 'react';
import Image from 'next/image';

import players from '../../../assets/images/Gramce_playery.svg';
import { ImageWrapper, Img, Wrapper } from './styled';
import backgroundImage from '../../../assets/images/background2_phone.jpg';

const SecondPart = () => {
  useEffect(() => {
    window.particlesJS?.load('particles-js1', 'particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return (
    <Wrapper>
      <div id="particles-js1" style={{ position: 'absolute', zIndex: 1, height: '100%' }}></div>
      <Image src={backgroundImage} alt="background" layout="fill" objectFit="cover" />
      <ImageWrapper>
        <Image src={players} alt="player" />
      </ImageWrapper>
    </Wrapper>
  );
};
export default SecondPart;
