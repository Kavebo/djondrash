import Link from 'next/link';
import React, { useContext } from 'react';

import languageIcon from '../../assets/images/CZ-EN_button.svg';
import homeIcon from '../../assets/images/HOME_button.svg';
import menuIcon from '../../assets/images/MENU_button.svg';
import { LanguageContext, locales } from '../../languages/LanguageProvider';
import { Img, Wrapper } from './styled';

const Navigation = () => {
  const [locale, setLocale] = useContext(LanguageContext);

  const handleOnLanguageClick = () => {
    setLocale(locales[(locales.indexOf(locale) + 1) % 2]);
  };

  const handleOnMenuClick = () => {
    console.log('[menu was clicked] ');
  };

  return (
    <Wrapper>
      <div>
        <Link href="/">
          <Img src={homeIcon} />
        </Link>
        <Img src={languageIcon} width={140} onClick={handleOnLanguageClick} />
      </div>
      <Img src={menuIcon} onClick={handleOnMenuClick} />
    </Wrapper>
  );
};
export default Navigation;
