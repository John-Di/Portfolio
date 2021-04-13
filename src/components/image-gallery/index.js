import React from "react";
import TileGrid from "../../layouts/tile-grid";
import HorizontalScrollable from "../horizontal-scrollable";
import useScroller from '../../hooks/useScroller';
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
  gap = 0.75,
  maxWidth = '100%',
  images = [],
  scroll = true,
  hasPadding = false,
  selectedFirst = false,
  buttonsInside = false
}) {
  const { scrollRef, index, PreviousButton, NextButton, Thumbnail, scrollPrevious, scrollNext } = useScroller({ max: images.length, selectedFirst, PREVIOUS, NEXT, THUMBNAIL });
  const prev = images.length > 4 && PreviousButton && <PreviousButton buttonsInside={buttonsInside}><LeftChevron /></PreviousButton>;
  const next = images.length > 4 && NextButton && <NextButton buttonsInside={buttonsInside}><RightChevron /></NextButton>;

  const ThumbnailElement = (image, i) => (
    <Thumbnail
      isCurrent={Thumbnail.isCurrent(i)}
      onClick={Thumbnail.onClick.bind(this, i)}
      transparency={1 / 3}
      key={i}
    >
      <IMG src={image} />
    </Thumbnail>
  );

  return (
    <WRAPPER maxWidth={maxWidth} className="image-gallery-wrapper" hasPadding={hasPadding}>
      <GALLERY className="image-gallery">
        <MAIN_IMAGE className="image-gallery__main-image">
          <IMG src={images[index]} />
        </MAIN_IMAGE>
        <HorizontalScrollable
          scrollRef={scrollRef}
          gap={gap}
          PreviousButton={prev}
          NextButton={next}
        >
          <NAVIGATION gap={gap} className="image-gallery__navigation" maxWidth={maxWidth}>
            <TileGrid gutterOffset={gap} items={images} ItemMap={ThumbnailElement} />
          </NAVIGATION>
        </HorizontalScrollable>
      </GALLERY>
    </WRAPPER>
  );
}
