import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { isMobile } from 'react-device-detect';

import languageIcon from '../../assets/images/CZ-EN_button.svg';
import homeIcon from '../../assets/images/HOME_button.svg';
import menuIcon from '../../assets/images/MENU_button.svg';
import instagramIcon from '../../assets/images/instagramIcon.png';
import youtubeIcon from '../../assets/images/youtube_icon_white.png';
import soundcloudIcon from '../../assets/images/soundcloud_icon_white.png';
import { useTranslation } from '../../languages';
import { LanguageContext, locales } from '../../languages/LanguageProvider';
import { ImageWrapper, LeftSide, MenuIconsWrapper, MenuIconWrapper, NavBarWrapper, RightSide, Wrapper } from './styled';

const ICON_HEIGHT = isMobile ? 30 : 50;

const Navigation = () => {
  const { locale, setLocale } = useContext(LanguageContext);
  const { t } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleOnLanguageClick = () => {
    setLocale(locales[(locales.indexOf(locale) + 1) % 2]);
  };

  const handleOnMenuClick = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <Wrapper>
      <NavBarWrapper $showNavbar={showNavbar}>
        <ul>
          <Link href="/pictures" passHref>
            <li>{t('pictures')}</li>
          </Link>
          <Link href="/press" passHref>
            <li>{t('press')}</li>
          </Link>
          <Link href="/shows" passHref>
            <li>{t('shows')}</li>
          </Link>
          <Link href="/courses" passHref>
            <li>{t('courses')}</li>
          </Link>
        </ul>
        <MenuIconWrapper>
          <Image src={menuIcon} alt="icon" onClick={handleOnMenuClick} width={ICON_HEIGHT} height={ICON_HEIGHT} />
        </MenuIconWrapper>
      </NavBarWrapper>

      <MenuIconsWrapper>
        <LeftSide>
          <ImageWrapper>
            <Link href="/" passHref>
              <Image src={homeIcon} alt="icon" objectFit="contain" />
            </Link>
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src={languageIcon}
              alt="icon"
              onClick={handleOnLanguageClick}
              width={ICON_HEIGHT * 1.5}
              height={ICON_HEIGHT * 1.3}
            />
          </ImageWrapper>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <a href="https://www.youtube.com/channel/UCrX211qiOB5XE3NSBuM-xbg" target="_blank" rel="noreferrer">
              <Image src={youtubeIcon} alt="icon" width={ICON_HEIGHT} height={ICON_HEIGHT} />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://soundcloud.com/djondrash" target="_blank" rel="noreferrer">
              <Image src={soundcloudIcon} alt="icon" width={ICON_HEIGHT} height={ICON_HEIGHT} />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://www.instagram.com/djondrash/" target="_blank" rel="noreferrer">
              <Image src={instagramIcon} alt="icon" width={ICON_HEIGHT} height={ICON_HEIGHT} />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={menuIcon} alt="icon" onClick={handleOnMenuClick} width={ICON_HEIGHT} height={ICON_HEIGHT} />
          </ImageWrapper>
        </RightSide>
      </MenuIconsWrapper>
    </Wrapper>
  );
};
export default Navigation;
