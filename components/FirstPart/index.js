import React from 'react';

import logo from '../../assets/images/Logo.png';
import { useTranslation } from '../../languages';
import styles from '../../styles/FirstPart.module.css';
import Navigation from '../Navigation';

const FirstPart = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <Navigation />
      <div className={styles.infoWrapper}>
        <div className={styles.columnWrapper}>
          <p className={styles.infoText}>
            {t('hey1')}
            {t('hey2')}
          </p>
          <p className={styles.infoText}>{t('about1')}</p>
          <p className={styles.infoText}>{t('about2')}</p>
        </div>
        <div className={styles.columnWrapper}>
          <p className={styles.emptySeparator} />
          <p className={styles.infoText}>{t('about3')}</p>
          <p className={styles.infoText}>{t('about4')}</p>
        </div>
      </div>
      <div className={styles.logoWrapper}>
        <img src={logo} width={200} />
      </div>
    </div>
  );
};
export default FirstPart;
