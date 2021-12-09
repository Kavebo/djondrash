import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import backgroundImage from '../assets/images/background3_phone_lighten.jpg';
import calendarIcon from '../assets/images/calendar_icon.png';
import locationIcon from '../assets/images/location_icon.png';
import mailIcon from '../assets/images/mail_icon.png';
import timeIcon from '../assets/images/time_icon.png';
import topicIcon from '../assets/images/topic_icon.png';
import Navigation from '../components/Navigation';
import { useTranslation } from '../languages';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-height: 100vh;
  overflow: scroll;
`;

const ContentWrapper = styled.div`
  margin: 10px auto 50px auto;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 10;
  flex: 1;
  padding: 10px;

  @media only screen and (min-width: 666px) {
    max-width: 90%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const IconWrapper = styled.div`
  width: 20%;
  max-width: 100%;
`;

const ItemWrapper = styled.div`
  height: 15%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  max-width: 50%;
  text-align: center;
  white-space: pre-line;
  animation: left-right 1s cubic-bezier(0.2, -2, 0.8, 2), show 1s ease-in;
  transition: all linear 0.1s;

  @media only screen and (min-width: 666px) {
    :nth-of-type(1n) {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    :nth-of-type(2n) {
      grid-column-start: 3;
      grid-column-end: 5;
    }

    :nth-of-type(3n) {
      grid-column-start: 2;
      grid-column-end: 4;
    }

    :nth-of-type(4n) {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    :nth-of-type(5n) {
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }

  @keyframes left-right {
    from {
      transform: translateX(-70px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;

const Title = styled.h1`
  padding: 20px;
  margin: auto;
  color: #eadcca;
`;

const Subtitle = styled.h2`
  margin: 5% auto;
  color: #eadcca;

  @media only screen and (min-width: 666px) and (orientation: landscape) {
    margin: 0 auto;
  }

  @media only screen and (min-width: 1024px) {
    margin: 2% auto;
  }
`;

const ItemText = styled.p`
  color: #eadcca;
  font-size: 20px;
  height: auto;
`;

const ItemMail = styled.a`
  color: #eadcca;
  font-size: 20px;
  text-decoration: underline;
`;

const courseData = [
  {
    text: 'courses_location',
    icon: locationIcon,
  },
  {
    text: 'courses_date',
    icon: calendarIcon,
  },
  {
    text: 'courses_mail',
    icon: mailIcon,
  },
  {
    text: 'courses_time',
    icon: timeIcon,
  },
  {
    text: 'courses_topic',
    icon: topicIcon,
  },
];

const Courses = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Image src={backgroundImage} alt="background" layout="fill" objectFit="cover" />
      <Head>
        <title>Dj Ondrash - Courses</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jozef Bobo Kavecansky" />
        <meta name="description" content="Courses to learn DJ skills ." />
      </Head>
      <Navigation />

      <Title>{t('courses_title')}</Title>
      <Subtitle>{t('courses_subtitle')}</Subtitle>

      <ContentWrapper>
        {courseData.map(({ text, icon }, index) => (
          <ItemWrapper key={index}>
            <IconWrapper>
              <Image src={icon} alt="icon" objectFit="contain" />
            </IconWrapper>
            <ItemText>
              {t(text)}
              {text === 'courses_mail' && <ItemMail href="mailto: djondrash@gmail.com">djondrash@gmail.com</ItemMail>}
            </ItemText>
          </ItemWrapper>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Courses;
