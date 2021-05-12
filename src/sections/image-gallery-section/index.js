import React from "react";
import Section from '../../components/section';
import ResponsivePair from '../../layouts/responsive-pair';
import ImageGallery from '../../components/image-gallery';
import {
  randomBool
} from '../../utils/randoms';
import { size } from '../../utils/variables';
import GalleryContext from "../../contexts/GalleryContext";
import useGallery from "../../hooks/useGallery";

export default function ImageGallerySection({ children, images, half = false }) {

  const inner = half || children ?
    <ResponsivePair
      hasPaddingSmall={false}
      hasPaddingLarge={true}
      isFlippedSmall={randomBool(0.75)}
      isFlippedLarge={randomBool(1 / 3)}
      items={(children ?
        [
          children,
          <ImageGallery images={images} style={{ height: '50vh' }} />
        ] : [
          <ImageGallery images={images} hasPadding={true} style={{ height: '50vh' }} />
        ]).filter(n => n)
      } />
    : <ImageGallery images={images} hasPadding={true} maxWidth={`${size.tablet}px`} style={{ height: '50vh' }} />;


  return (
    <GalleryContext.Provider value={useGallery({
      max: 8,
      images,
      currentIndex: 0
    })} >
      <Section maxWidth={`${size.laptopL}px`} hasPadding={true}
        hasMarginSmall={false}
        hasMarginLarge={true}
        heading={(<h1>Image Gallery Section</h1>)}
        subheading={children && (<h2>with a Text Block</h2>)}>
        {inner}
      </Section >
    </GalleryContext.Provider>
  );
}
