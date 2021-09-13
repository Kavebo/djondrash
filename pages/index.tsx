import Head from 'next/head';
import React, { useState } from 'react';

import FirstPart from '../components/FirstPart';
import Modal from '../components/Modal';
import SecondPart from '../components/SecondPart';
import Subscription from '../components/Subscription';
import ThirdPart from '../components/ThirdPart';

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  // TODO: make here cookie function to show modal

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
        <Subscription closeModal={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default Home;
