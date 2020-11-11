import React from 'react';

import logo from '../../assets/images/Logo.png';
import { useTranslation } from '../../languages';
import Navigation from '../Navigation';
import { Column, InfoWrapper, LogoWrapper, Row, Separator, Text, TextBold, Wrapper } from './styled';

const FirstPart = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Navigation />
      <InfoWrapper>
        <Column>
          <Row>
            <TextBold>{t('hey1')}</TextBold>' '<Text>{t('hey2')}</Text>
          </Row>
          <Text>{t('about1')}</Text>
          <Text>{t('about2')}</Text>
        </Column>
        <Column>
          <Separator />
          <Text>{t('about3')}</Text>
          <Text>{t('about4')}</Text>
        </Column>
      </InfoWrapper>
      <LogoWrapper>
        <img src={logo} width={200} />
      </LogoWrapper>
    </Wrapper>
  );
};
export default FirstPart;