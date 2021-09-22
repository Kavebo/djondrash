import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import FirstPart from '../components/FirstPart';
import Modal from '../components/Modal';
import SecondPart from '../components/SecondPart';
import Subscription from '../components/Subscription';
import ThirdPart from '../components/ThirdPart';
import { initializeFirebase } from '../constants/firebase/firebase';
import { SUBSCRIPTION_COOKIE, ONE_YEAR_IN_DAYS } from '../utils/constants';
import { getCookie, setCookie } from '../utils/cookies';

initializeFirebase();

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const bannerCookie = getCookie(SUBSCRIPTION_COOKIE);

    setTimeout(() => {
      if (bannerCookie === undefined) {
        setShowModal(true);
      }
    }, 2000);
  }, []);

  const handleOnSubscribe = () => {
    setCookie(SUBSCRIPTION_COOKIE, 'true', ONE_YEAR_IN_DAYS);
    setShowModal(false);
  };
  return (
    <>
      <Head>
        <title>Dj Ondrash Home page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jozef Bobo Kavecansky" />
        <meta name="description" content="Check DJ Ondrash's web page and check his portfolio." />
      </Head>
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <Subscription closeModal={handleOnSubscribe} />
      </Modal>
    </>
  );
};

export default Home;
