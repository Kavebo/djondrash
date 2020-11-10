import React from 'react';

import logo from '../../assets/images/Logo.png';
import { useTranslation } from '../../languages';
import Navigation from '../Navigation';

const FirstPart = () => {
  const { t } = useTranslation();

  return (
    <div className="wrapper1">
      <Navigation />
      <div className="info-wrapper">
        <div className="column-wrapper">
          <p className="info-text">
            {t('hey1')}
            {t('hey2')}
          </p>
          <p className="info-text">{t('about1')}</p>
          <p className="info-text">{t('about2')}</p>
        </div>
        <div className="column-wrapper">
          <p className="empty-separator" />
          <p className="info-text">{t('about3')}</p>
          <p className="info-text">{t('about4')}</p>
        </div>
      </div>
      <div className="logo-wrapper">
        <img src={logo} width={200} />
      </div>
    </div>
  );
};
export default FirstPart;
