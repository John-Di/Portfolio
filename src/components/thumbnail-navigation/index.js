import React from "react";
import ThumbnailGrid from "../thumbnail-grid";
import LeftChevron from '../../images/svgs/left-chevron.svg';
import RightChevron from '../../images/svgs/right-chevron.svg';
import Button from "./button";
import {
  SCROLLABLE,
  NAVIGATION,
} from './styles';

export default function ThumbnailNavigation({
  Image,
  images = [],
  scrollRef,
  gap = 0.75,
  maxWidth = '100%',
  buttonsInside = true,
  isCurrent,
  updateByVisibleOption,
  ...buttons
}) {
  const hasNavButtons = images.length > 4, {
    atBeginning,
    atEnd,
    scrollPreviousOption,
    scrollNextOption

  } = buttons;
  return (
    <SCROLLABLE
      ref={scrollRef}
      className="image-gallery__scrollable" gap={gap}
      hasButtons={hasNavButtons}
      buttonsInside={hasNavButtons && buttonsInside}
    >
      {
        hasNavButtons &&
        <Button
          buttonInside={buttonsInside}
          isPrev={true}
          isDisabled={atBeginning}
          disabled={atBeginning}
          hasPadding={hasNavButtons}
          scrollSlide={scrollPreviousOption}
        >
          <LeftChevron />
        </Button>
      }
      <NAVIGATION gap={gap} className="image-gallery__navigation" maxWidth={maxWidth}>
        <ThumbnailGrid
          Image={Image}
          updateByVisibleOption={updateByVisibleOption}
          images={images}
          isCurrent={isCurrent}
          gutterOffset={gap} />
      </NAVIGATION>
      {
        hasNavButtons &&
        <Button
          buttonInside={buttonsInside}
          isPrev={false}
          isDisabled={atEnd}
          disabled={atEnd}
          hasPadding={hasNavButtons}
          scrollSlide={scrollNextOption}
        >
          <RightChevron />
        </Button>
      }
    </SCROLLABLE>
  );
}
