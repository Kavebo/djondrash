import React from 'react';

import downloadIcon from '../../assets/images/Download_button.svg';
import fbIcon from '../../assets/images/FB_icon.svg';
import igIcon from '../../assets/images/IG_icon.svg';
import spotifyIcon from '../../assets/images/SPOTIFY_icon.svg';
import vimeoIcon from '../../assets/images/VIMEO_icon.svg';
import {
  Column,
  DownloadIcon,
  DownloadLinkWrapper,
  EmailLink,
  IconsWrapper,
  Img,
  Link,
  Row,
  SignatureWrapper,
  SocialIconWrapper,
  Wrapper,
} from './styled';

const ThirdPart = () => {
  return (
    <Wrapper>
      <Column>
        <DownloadLinkWrapper>
          <Link href="https://www.dropbox.com/sh/hbrg1m0fk8dqois/AABLSf1uBH9hPVuweScEUEFQa?dl=0" target="_blank">
            <DownloadIcon src={downloadIcon} />
          </Link>
        </DownloadLinkWrapper>
        <Row>
          <EmailLink href="mailto: djondrash@gmail.com">djondrash@gmail.com</EmailLink>
        </Row>
        <IconsWrapper>
          <SocialIconWrapper>
            <Link href="https://www.facebook.com/djondrash/" target="_blank">
              <Img src={fbIcon} />
            </Link>
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Link href="https://www.instagram.com/djondrash/" target="_blank">
              <Img src={igIcon} />
            </Link>
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Link
              href="https://open.spotify.com/user/1uw2notq7eadot3ajdpjkneeh?si=P1klSqzDTRKkG_yN2PIp9Q"
              target="_blank"
            >
              <Img src={spotifyIcon} />
            </Link>
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Link href="https://vimeo.com/ondrash" target="_blank">
              <Img src={vimeoIcon} />
            </Link>
          </SocialIconWrapper>
        </IconsWrapper>
      </Column>
      <SignatureWrapper>
        <a href="mailto: jozef.kavecansky@gmail.com">Made by Bobo</a>
      </SignatureWrapper>
    </Wrapper>
  );
};
export default ThirdPart;
