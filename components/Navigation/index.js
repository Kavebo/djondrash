import Link from 'next/link';
import React, { useContext, useState } from 'react';

import languageIcon from '../../assets/images/CZ-EN_button.svg';
import homeIcon from '../../assets/images/HOME_button.svg';
import menuIcon from '../../assets/images/MENU_button.svg';
import { useTranslation } from '../../languages';
import { LanguageContext, locales } from '../../languages/LanguageProvider';
import { Img, LeftSide, MenuIcon, MenuIconWrapper, NavBarWrapper, RightSide, Wrapper } from './styled';

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
            <li>{t('portfolio')}</li>
          </Link>
          <Link href="/">
            <li>{t('press')}</li>
          </Link>
        </ul>
        <MenuIconWrapper>
          <MenuIcon src={menuIcon} onClick={handleOnMenuClick} height={50} />
        </MenuIconWrapper>
      </NavBarWrapper>

      <LeftSide>
        <Link href="/">
          <Img src={homeIcon} />
        </Link>
        <Img src={languageIcon} onClick={handleOnLanguageClick} />
      </LeftSide>
      {!showNavbar && (
        <RightSide>
          <Img src={menuIcon} onClick={handleOnMenuClick} />
        </RightSide>
      )}
    </Wrapper>
  );
};
export default Navigation;
