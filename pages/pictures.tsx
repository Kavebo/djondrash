import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import background from '../assets/images/background3_phone.jpg';
import Navigation from '../components/Navigation';
import { photos } from '../constants/photos';

const Wrapper = styled.div`
  background: url(${background});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  height: 100vh;
  margin: auto;
  padding: 10px;

  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    max-width: 70%;
  }
`;

const Pictures = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Wrapper>
      <Head>
        <title>Dj Ondrash - Pictures</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jozef Bobo Kavecansky" />
        <meta name="description" content="DJ Ondrash's pictures from his actions and concerts." />
      </Head>
      <Navigation />
      <ContentWrapper>
        <Gallery photos={photos} onClick={openLightbox} />
      </ContentWrapper>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x: any) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Wrapper>
  );
};

export default Pictures;
