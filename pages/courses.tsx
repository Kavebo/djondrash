import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import background from '../assets/images/background3_phone.jpg';
import calendarIcon from '../assets/images/calendar_icon.png';
import locationIcon from '../assets/images/location_icon.png';
import mailIcon from '../assets/images/mail_icon.png';
import timeIcon from '../assets/images/time_icon.png';
import topicIcon from '../assets/images/topic_icon.png';
import Navigation from '../components/Navigation';
import { useTranslation } from '../languages';

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5)), url(${background});
  background-repeat: repeat;
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
    max-width: 90%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Icon = styled.img`
  width: 20%;
  max-width: 100%;
`;

const ItemWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  max-width: 50%;
  text-align: center;
  white-space: pre-line;

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
`;

const Title = styled.h1`
  padding: 3%;
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
            <Icon src={icon} />
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
