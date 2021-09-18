import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../languages';
import { INFORMATIONAL_COOKIE, ONE_YEAR_IN_DAYS } from '../../utils/constants';
import { getCookie, setCookie } from '../../utils/cookies';
import { BannerWrapper, CloseButton, CookieText } from './styled';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const bannerShown = getCookie(INFORMATIONAL_COOKIE);

    if (bannerShown === undefined) {
      setShowBanner(true);
    }
  }, []);

  const handleOnCLose = () => {
    setShowBanner(false);
    setCookie(INFORMATIONAL_COOKIE, 'true', ONE_YEAR_IN_DAYS);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <BannerWrapper>
      <CookieText>{t('cookies_text')}</CookieText>
      <CloseButton onClick={handleOnCLose}>x</CloseButton>
    </BannerWrapper>
  );
};

export default CookieBanner;
