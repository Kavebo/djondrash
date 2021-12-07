import Link from 'next/link';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { isMobile } from 'react-device-detect';

import languageIcon from '../../assets/images/CZ-EN_button.svg';
import homeIcon from '../../assets/images/HOME_button.svg';
import menuIcon from '../../assets/images/MENU_button.svg';
import twitterIcon from '../../assets/images/twitter_icon.png';
import messengerIcon from '../../assets/images/messenger_icon.svg';
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
            <Image src={languageIcon} alt="icon" onClick={handleOnLanguageClick} />
          </ImageWrapper>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <a href="https://m.me/100073730272897" target="_blank" rel="noreferrer">
              <Image src={messengerIcon} alt="icon" width={ICON_HEIGHT} height={ICON_HEIGHT} />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://twitter.com/djondrash" target="_blank" rel="noreferrer">
              <Image src={twitterIcon} alt="icon" width={ICON_HEIGHT} height={ICON_HEIGHT} />
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
