import Image from 'next/image';
import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import backgroundImage from '../../../assets/images/background3_phone.jpg';
import downloadIcon from '../../../assets/images/Download_button.svg';
import { Column, DownloadLinkWrapper, EmailLink, Link, Row, SignatureWrapper, Wrapper } from './styled';

const DOWNLOAD_ICON_HEIGHT = isMobile ? 70 : 90;

const ThirdPart = () => {
  useEffect(() => {
    window.particlesJS?.load('particles-js2', 'particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return (
    <Wrapper>
      <div id="particles-js2" style={{ position: 'absolute', zIndex: 1, height: '100%' }}></div>
      <Image src={backgroundImage} alt="background" layout="fill" objectFit="cover" />
      <Column>
        <DownloadLinkWrapper>
          <Link href="https://www.dropbox.com/sh/hbrg1m0fk8dqois/AABLSf1uBH9hPVuweScEUEFQa?dl=0" target="_blank">
            <Image
              src={downloadIcon}
              alt="JD Ondrash content"
              width={DOWNLOAD_ICON_HEIGHT}
              height={DOWNLOAD_ICON_HEIGHT}
            />
          </Link>
        </DownloadLinkWrapper>
        <Row>
          <EmailLink href="mailto: djondrash@gmail.com">djondrash@gmail.com</EmailLink>
        </Row>
      </Column>
      <SignatureWrapper>
        <a href="mailto: jozef.kavecansky@gmail.com">Made by Bobo</a>
      </SignatureWrapper>
    </Wrapper>
  );
};
export default ThirdPart;
