import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import backgroundImage from '../assets/images/background3_phone.jpg';
import { initializeFirebase } from '../constants/firebase/firebase';
import { deleteUser } from '../constants/firebase/users';
import { useTranslation } from '../languages';

initializeFirebase();

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  z-index: 10;
  height: 100vh;
  padding: 10px;
`;

const Label = styled.p`
  text-align: center;
  font-size: 30px;
  color: #eadcca;
  transition: all 0.15s linear;
  margin-top: 30%;

  :hover {
    font-size: 33px;
    cursor: pointer;
  }
`;

const Unsubscribe = () => {
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    const userId = `${router.query?.userId}`;

    if (userId !== 'undefined') deleteUser(userId);
  }, [router]);

  return (
    <Wrapper>
      <Head>
        <title>Dj Ondrash - unsubscribe</title>
      </Head>
      <Image src={backgroundImage} alt="background" layout="fill" objectFit="cover" />
      <ContentWrapper>
        <Link href="/" passHref>
          <Label>{t('unsubscribe_label')}</Label>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Unsubscribe;
