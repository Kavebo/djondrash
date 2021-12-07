import React from 'react';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import backgroundImage from '../../../assets/images/background3_phone.jpg';
import downloadIcon from '../../../assets/images/Download_button.svg';
import youtubeIcon from '../../../assets/images/youtube_icon_dark2.png';
import soundcloudIcon from '../../../assets/images/soundcloud_dark.png';
import spotify_logo_dark from '../../../assets/images/spotify_logo_dark2.png';
import {
  Column,
  DownloadLinkWrapper,
  EmailLink,
  IconsWrapper,
  Link,
  Row,
  SignatureWrapper,
  SocialIconWrapper,
  Wrapper,
} from './styled';

const ICON_HEIGHT = isMobile ? 30 : 50;
const DOWNLOAD_ICON_HEIGHT = isMobile ? 70 : 90;

const ThirdPart = () => {
  return (
    <Wrapper>
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
        <IconsWrapper>
          <SocialIconWrapper>
            <Link href="https://www.youtube.com/channel/UCrX211qiOB5XE3NSBuM-xbg" target="_blank">
              <Image src={youtubeIcon} alt="DJ Ondrash youtube" width={ICON_HEIGHT} height={ICON_HEIGHT} />
            </Link>
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Link
              href="https://open.spotify.com/user/1uw2notq7eadot3ajdpjkneeh?si=P1klSqzDTRKkG_yN2PIp9Q"
              target="_blank"
            >
              <Image src={spotify_logo_dark} alt="DJ Ondrash spotify" width={ICON_HEIGHT} height={ICON_HEIGHT} />
            </Link>
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Link href="https://soundcloud.com/djondrash" target="_blank">
              <Image src={soundcloudIcon} alt="DJ Ondrash soundcloud" width={ICON_HEIGHT} height={ICON_HEIGHT} />
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
