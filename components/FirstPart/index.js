import React, { useEffect, useState } from 'react';
import { isMobileOnly } from 'react-device-detect';

import logo from '../../assets/images/Logo.png';
import { useTranslation } from '../../languages';
import Navigation from '../Navigation';
import { Column, InfoWrapper, LogoImage, LogoWrapper, MainColumn, Row, Text, TextInOneRow, Wrapper } from './styled';

const FirstPart = () => {
  const { t } = useTranslation();
  const [isPortraitMode, setIsPortraitMode] = useState(false);

  useEffect(() => {
    if (process.browser) {
      const checkScreenOrientation = () => {
        setIsPortraitMode(window.innerHeight > window.innerWidth);
      };

      checkScreenOrientation();
      window.addEventListener('resize', checkScreenOrientation);
    }
  }, [process.browser]);

  const BodyPortrait = () => (
    <MainColumn>
      <h1 style={{ display: 'none' }}>DJ Ondrash</h1>
      <Column $isPortraitMode={true}>
        <TextInOneRow>
          <Text>{t('hey1')}</Text>
          <Text>{t('hey2')}</Text>
        </TextInOneRow>
      </Column>
      <Column $isPortraitMode={true}>
        <Text>{t('about1')}</Text>
      </Column>
      <Column $isPortraitMode={true}>
        <Text>{t('about2')}</Text>
      </Column>
      <Column $isPortraitMode={true}>
        <Text>{t('about3')}</Text>
      </Column>
      <Column $isPortraitMode={true}>
        <Text>{t('about4')}</Text>
      </Column>
      <Column>
        <LogoWrapper>
          <LogoImage src={logo} alt="dj ondrash logo" width={200} />
        </LogoWrapper>
      </Column>
    </MainColumn>
  );

  const BodyLandscape = () => (
    <MainColumn>
      <Row>
        <Column>
          <TextInOneRow>
            <Text>{t('hey1')}</Text>
            <Text>{t('hey2')}</Text>
          </TextInOneRow>
        </Column>
        <Column>
          <div style={{ flex: 1 }} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Text>{t('about1')}</Text>
        </Column>
        <Column>
          <Text>{t('about3')}</Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Text>{t('about2')}</Text>
        </Column>
        <Column>
          <Text>{t('about4')}</Text>
          <LogoWrapper>
            <LogoImage src={logo} width={200} />
          </LogoWrapper>
        </Column>
      </Row>
    </MainColumn>
  );

  return (
    <Wrapper>
      <Navigation />
      <InfoWrapper>{isMobileOnly && isPortraitMode ? BodyPortrait() : BodyLandscape()}</InfoWrapper>
    </Wrapper>
  );
};
export default FirstPart;
