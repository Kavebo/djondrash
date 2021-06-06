import Link from 'next/link';
import React, { useContext, useState } from 'react';

import languageIcon from '../../assets/images/CZ-EN_button.svg';
import homeIcon from '../../assets/images/HOME_button.svg';
import menuIcon from '../../assets/images/MENU_button.svg';
import { useTranslation } from '../../languages';
import { LanguageContext, locales } from '../../languages/LanguageProvider';
import {
  ImageWrapper,
  Img,
  LeftSide,
  MenuIconsWrapper,
  MenuIconWrapper,
  NavBarWrapper,
  RightSide,
  Wrapper,
} from './styled';

const Navigation = () => {
  const [locale, setLocale] = useContext(LanguageContext);
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
          <Link href="/">
            <li>{t('pictures')}</li>
          </Link>
          <Link href="/">
            <li>{t('press')}</li>
          </Link>
          <Link href="/">
            <li>{t('shows')}</li>
          </Link>
        </ul>
        <MenuIconWrapper>
          <Img src={menuIcon} onClick={handleOnMenuClick} height={50} />
        </MenuIconWrapper>
      </NavBarWrapper>

      <MenuIconsWrapper>
        <LeftSide>
          <ImageWrapper>
            <Link href="/">
              <Img src={homeIcon} width={50} height={50} />
            </Link>
          </ImageWrapper>
          <ImageWrapper>
            <Img src={languageIcon} onClick={handleOnLanguageClick} width={50} height={50} />
          </ImageWrapper>
        </LeftSide>
        <RightSide>
          <Img src={menuIcon} onClick={handleOnMenuClick} width={50} height={50} />
        </RightSide>
      </MenuIconsWrapper>
    </Wrapper>
  );
};
export default Navigation;
