import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import background from '../assets/images/background3_phone.jpg';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import pressData from '../constants/press';
import { useTranslation } from '../languages';

const Wrapper = styled.div`
  background: url(${background});
  background-repeat: repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  flex: 1;
  height: 100vh;
  margin: auto;
  padding: 10px;

  @media only screen and (min-width: 666px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    max-width: 70%;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const PressImage = styled.img`
  width: 40%;
  border-radius: 10px;
  width: fit-content;
  max-width: 100%;
`;

export const H1 = styled.h1`
  color: white;
  margin-left: 5%;
`;

const Press = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Head>
        <title>Dj Ondrash - Pictures</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jozef Bobo Kavecansky" />
        <meta name="description" content="Articles about DJ Ondrash ." />
      </Head>
      <Navigation />
      <H1>{t('press_title')}</H1>
      <ContentWrapper>
        {pressData.map(({ link, image }) => (
          <a href={link} target="_blank" key={link}>
            <Card>
              <PressImage src={image} />
            </Card>
          </a>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Press;
