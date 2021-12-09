import React, { useEffect, useState } from 'react';
import { isMobileOnly } from 'react-device-detect';
import Image from 'next/image';

import logo from '../../../assets/images/Logo.png';
import { useTranslation } from '../../../languages';
import Navigation from '../../Navigation';
import { Column, InfoWrapper, LogoWrapper, MainColumn, Row, Text, TextInOneRow, Wrapper } from './styled';
import backgroundImage from '../../../assets/images/background1_phone.jpg';

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
      <Column $isPortraitMode>
        <TextInOneRow>
          <Text>{t('hey1')}</Text>
          <Text>{t('hey2')}</Text>
        </TextInOneRow>
      </Column>
      <Column $isPortraitMode>
        <Text>{t('about1')}</Text>
      </Column>
      <Column $isPortraitMode>
        <Text>{t('about2')}</Text>
      </Column>
      <Column $isPortraitMode>
        <Text>{t('about3')}</Text>
      </Column>
      <Column $isPortraitMode>
        <Text>{t('about4')}</Text>
      </Column>
      <Column>
        <LogoWrapper>
          <Image src={logo} objectFit="contain" alt="logo" />
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
            <Image src={logo} objectFit="contain" alt="logo" />
          </LogoWrapper>
        </Column>
      </Row>
    </MainColumn>
  );

  return (
    <Wrapper>
      <Image src={backgroundImage} alt="background" layout="fill" objectFit="cover" />

      <Navigation />
      <InfoWrapper>{isMobileOnly && isPortraitMode ? BodyPortrait() : BodyLandscape()}</InfoWrapper>
    </Wrapper>
  );
};
export default FirstPart;
