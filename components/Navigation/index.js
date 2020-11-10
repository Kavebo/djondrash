import Link from 'next/link';
import React, { useContext } from 'react';

import languageIcon from '../../assets/images/CZ-EN_button.svg';
import homeIcon from '../../assets/images/HOME_button.svg';
import menuIcon from '../../assets/images/MENU_button.svg';
import { LanguageContext, locales } from '../../languages/LanguageProvider';
import styles from '../../styles/Navigation.module.css';

const Navigation = () => {
  const [locale, setLocale] = useContext(LanguageContext);

  const handleOnLanguageClick = () => {
    setLocale(locales[(locales.indexOf(locale) + 1) % 2]);
  };

  return (
    <div className={styles.navigationWrapper}>
      <div>
        <Link href="/">
          <img className={styles.hoverPointer} src={homeIcon} width={100} height={140} />
        </Link>
        <img className={styles.hoverPointer} src={languageIcon} width={140} onClick={handleOnLanguageClick} />
      </div>
      <img className={styles.hoverPointer} src={menuIcon} width={100} />
    </div>
  );
};
export default Navigation;
