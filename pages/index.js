import React from 'react';
import Head from 'next/head';

import FirstPart from '../components/FirstPart';
import SecondPart from '../components/SecondPart';
import ThirdPart from '../components/ThirdPart';

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
