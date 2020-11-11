import React from 'react';

import downloadIcon from '../../assets/images/Download_button.svg';
import fbIcon from '../../assets/images/FB_icon.svg';
import igIcon from '../../assets/images/IG_icon.svg';
import spotifyIcon from '../../assets/images/SPOTIFY_icon.svg';
import vimeoIcon from '../../assets/images/VIMEO_icon.svg';
import { Column, DownloadIcon, EmailLink, IconsWrapper, Img, Link, Row, SignatureWrapper, Wrapper } from './styled';

const ThirdPart = () => {
  return (
    <Wrapper>
      <Column>
        <Row>
          <DownloadIcon src={downloadIcon} />
        </Row>
        <Row>
          <EmailLink href="mailto: djondrash@gmail.com">djondrash@gmail.com</EmailLink>
        </Row>
        <IconsWrapper>
          <Link href="https://www.facebook.com/djondrash/" target="_blank">
            <Img src={fbIcon} />
          </Link>
          <Link href="https://www.instagram.com/djondrash/" target="_blank">
            <Img src={igIcon} />
          </Link>
          <Link href="https://soundcloud.com/djondrash" target="_blank">
            <Img src={spotifyIcon} />
          </Link>
          <Link href="https://vimeo.com/ondrash" target="_blank">
            <Img src={vimeoIcon} />
          </Link>
        </IconsWrapper>
      </Column>
      <SignatureWrapper>
        <a href="mailto: jozef.kavecansky@gmail.com">Made by Bobo</a>
      </SignatureWrapper>
    </Wrapper>
  );
};
export default ThirdPart;
