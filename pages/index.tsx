import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import FirstPart from '../components/FirstPart';
import SecondPart from '../components/SecondPart';
import ThirdPart from '../components/ThirdPart';
import { initializeFirebase } from '../constants/firebase/firebase';

initializeFirebase();

const Home = () => {
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
    </>
  );
};

export default Home;
