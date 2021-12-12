import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Gallery, { RenderImageProps } from 'react-photo-gallery';
import Carousel, { CommonProps, Modal, ModalGateway } from 'react-images';
import Image from 'next/image';

import backgroundImage from '../assets/images/background3_phone.jpg';
import Navigation from '../components/Navigation';
import { photos } from '../constants/photos';
import { useMemo } from 'react';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: scroll;
`;

const ImageWrapper = styled.div`
  text-align: center;

  :hover {
    cursor: pointer;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  z-index: 10;
  width: 100%;
  margin: auto;
  padding: 10px;

  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    max-width: 70%;
  }
`;

const Pictures = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const pictures = useMemo(() => photos, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const handleRenderImage: React.ComponentType<RenderImageProps<{}>> = ({ index, photo }) => {
    const { height, width, src } = photo;

    return (
      <ImageWrapper key={index}>
        <Image
          src={src}
          width={width}
          height={height}
          alt="picture"
          onClick={() => {
            setCurrentImage(index);
            setViewerIsOpen(true);
          }}
        />
      </ImageWrapper>
    );
  };

  return (
    <Wrapper>
      <Head>
        <title>Dj Ondrash - Pictures</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jozef Bobo Kavecansky" />
        <meta name="description" content="DJ Ondrash's pictures from his actions and concerts." />
      </Head>
      <Image src={backgroundImage} alt="background" layout="fill" objectFit="cover" />
      <Navigation />
      <ContentWrapper>
        <Gallery photos={pictures as any} onClick={openLightbox} renderImage={handleRenderImage} />
      </ContentWrapper>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              components={{ View: ModalImage }}
              currentIndex={currentImage}
              views={pictures.map((x: any) => ({
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

// eslint-disable-next-line react/display-name
const ModalImage: React.FC<CommonProps> = React.memo((props) => {
  const { src: srcObject } = (props as any).data;
  const { height, width } = srcObject || {};
  const objectFit = height > width ? 'none' : 'cover';

  return (
    <ImageWrapper>
      <Image src={srcObject} objectFit={objectFit} alt="picture" />
    </ImageWrapper>
  );
});

export default Pictures;
