import React from "react";
import TileList from "../../layouts/tile-list";
import HorizontalScrollable from "../horizontal-scrollable";
import useScroller from './useScroller';
import LeftChevron from '../../images/svgs/left-chevron.svg';
import RightChevron from '../../images/svgs/right-chevron.svg';
import {
  WRAPPER,
  GALLERY,
  MAIN_IMAGE,
  NAVIGATION,
  THUMBNAIL,
  IMG,
  PREVIOUS,
  NEXT
} from './styles';

export default function ImageGallery({
  gap = 0.25,
  maxWidth = '100%',
  images = [],
  scroll = true,
  hasPadding = false,
  selectedFirst = false,
  buttonsInside = false
}) {

  const { scrollRef, index, setIndex, PreviousButton, NextButton } = useScroller({ max: images.length, selectedFirst, PREVIOUS, NEXT });
  const prev = <PreviousButton {...PreviousButton} buttonsInside={buttonsInside}><LeftChevron /></PreviousButton>;
  const next = <NextButton {...NextButton} buttonsInside={buttonsInside}><RightChevron /></NextButton>;

  const ThumbnailElement = (image, i) => (
    <THUMBNAIL
      className={`image-gallery__thumbnail`}
      isCurrent={index === i}
      scroll={scroll}
      transparency={1 / 3}
      onClick={setIndex.bind(this, i)}
      maxWidth={100 / Math.min(images.length, 5)}
      gap={gap}
      key={i}
    >
      <IMG src={image} />
    </THUMBNAIL>
  );

  return (
    <WRAPPER maxWidth={maxWidth} className="image-gallery-wrapper" hasPadding={hasPadding}>
      <GALLERY className="image-gallery">
        <MAIN_IMAGE className="image-gallery__main-image">
          <IMG src={images[index]} />
        </MAIN_IMAGE>
        <HorizontalScrollable
          scrollRef={scrollRef}
          gap={1.25 / 2}
          PreviousButton={images.length > 4 && prev}
          NextButton={images.length > 4 && next}
        >
          <NAVIGATION gap={0.75} className="image-gallery__navigation" maxWidth={maxWidth}>
            <TileList gutterOffset={0.75} items={images} itemMap={ThumbnailElement} />
          </NAVIGATION>
        </HorizontalScrollable>
      </GALLERY>
    </WRAPPER>
  );
}
