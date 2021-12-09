import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import backgroundImage from '../assets/images/background3_phone.jpg';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import pressData from '../constants/press';
import { useTranslation } from '../languages';

const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  z-index: 10;
  margin: 0 auto;
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
  width: fit-content;
  max-width: 100%;
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
      <Image src={backgroundImage} alt="background" layout="fill" objectFit="cover" />
      <Navigation />
      <ContentWrapper>
        {pressData.map(({ link, image }) => (
          <a href={link} target="_blank" key={link} rel="noreferrer">
            <Card>
              <Image src={image} alt="press" quality={10} objectFit="contain" />
            </Card>
          </a>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Press;
