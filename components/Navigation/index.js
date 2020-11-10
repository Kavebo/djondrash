import Link from 'next/link';
import React, { useContext } from 'react';

import languageIcon from '../../assets/images/CZ-EN_button.svg';
import homeIcon from '../../assets/images/HOME_button.svg';
import menuIcon from '../../assets/images/MENU_button.svg';
import { LanguageContext, locales } from '../../languages/LanguageProvider';

const Navigation = () => {
  const [locale, setLocale] = useContext(LanguageContext);

  const handleOnLanguageClick = () => {
    setLocale(locales[(locales.indexOf(locale) + 1) % 2]);
  };

  return (
    <div className="navigation-wrapper">
      <div>
        <Link href="/">
          <img className="hover-pointer" src={homeIcon} width={100} height={140} />
        </Link>
        <img className="hover-pointer" src={languageIcon} width={140} onClick={handleOnLanguageClick} />
      </div>
      <img className="hover-pointer" src={menuIcon} width={100} />
    </div>
  );
};
export default Navigation;
