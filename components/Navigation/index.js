import Link from 'next/link';
import React, { useContext, useState } from 'react';

import languageIcon from '../../assets/images/CZ-EN_button.svg';
import homeIcon from '../../assets/images/HOME_button.svg';
import menuIcon from '../../assets/images/MENU_button.svg';
import { useTranslation } from '../../languages';
import { LanguageContext, locales } from '../../languages/LanguageProvider';
import { Img, MenuIcon, MenuIconWrapper, NavBarWrapper, Wrapper } from './styled';

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
          <Link href="/videos">
            <li>{t('videos')}</li>
          </Link>
          <Link href="/">
            <li>{t('actions')}</li>
          </Link>
          <Link href="/">
            <li>{t('cooperation')}</li>
          </Link>
        </ul>
        <MenuIconWrapper>
          <MenuIcon src={menuIcon} onClick={handleOnMenuClick} height={50} />
        </MenuIconWrapper>
      </NavBarWrapper>

      <div>
        <Link href="/">
          <Img src={homeIcon} />
        </Link>
        <Img src={languageIcon} width={140} onClick={handleOnLanguageClick} />
      </div>
      {!showNavbar && <Img src={menuIcon} onClick={handleOnMenuClick} />}
    </Wrapper>
  );
};
export default Navigation;
