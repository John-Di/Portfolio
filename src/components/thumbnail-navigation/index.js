import React, { useContext } from "react";
import GalleryContext from "../../contexts/GalleryContext";
import ThumbnailGrid from "../thumbnail-grid";
import LeftChevron from '../../images/svgs/left-chevron.svg';
import RightChevron from '../../images/svgs/right-chevron.svg';
import Button from "./button";
import {
  SCROLLABLE,
  NAVIGATION,
} from './styles';

export default function ThumbnailNavigation({
  gap = 0.75,
  maxWidth = '100%',
  buttonsInside = true
}) {
  const {
    scrollRef,
    hasNavButtons,
  } = useContext(GalleryContext);

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
        >
          <LeftChevron />
        </Button>
      }
      <NAVIGATION gap={gap} className="image-gallery__navigation" maxWidth={maxWidth}>
        <ThumbnailGrid gutterOffset={gap} />
      </NAVIGATION>
      {
        hasNavButtons &&
        <Button
          buttonInside={buttonsInside}
          isPrev={false}
        >
          <RightChevron />
        </Button>
      }
    </SCROLLABLE>
  );
}
