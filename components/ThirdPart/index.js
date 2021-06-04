import React from 'react';

import downloadIcon from '../../assets/images/Download_button.svg';
import youtubeIcon from '../../assets/images/youtube_icon_dark2.png';
import soundcloudIcon from '../../assets/images/soundcloud_dark.png';
import spotify_logo_dark from '../../assets/images/spotify_logo_dark2.png';
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
            <Link href="https://www.youtube.com/channel/UCrX211qiOB5XE3NSBuM-xbg" target="_blank">
              <Img src={youtubeIcon} />
            </Link>
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Link href="https://soundcloud.com/djondrash" target="_blank">
              <Img src={soundcloudIcon} />
            </Link>
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Link
              href="https://open.spotify.com/user/1uw2notq7eadot3ajdpjkneeh?si=P1klSqzDTRKkG_yN2PIp9Q"
              target="_blank"
            >
              <Img src={spotify_logo_dark} />
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
