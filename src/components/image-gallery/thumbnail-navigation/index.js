import React, { useContext } from "react";
import GalleryContext from "../../../contexts/GalleryContext";
import ThumbnailGrid from "./thumbnail-grid";
import PreviousButton from "../previous-button";
import NextButton from "../next-button";
import {
  SCROLLABLE,
  NAVIGATION,
} from './styles';

export default function ThumbnailNavigation({
  gap = 0.75,
  maxWidth = '100%',
  buttonsInside = false
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
      buttonPadding={hasNavButtons && buttonsInside}
    >
      {hasNavButtons && <PreviousButton
        hasButtons={hasNavButtons}
        buttonPadding={hasNavButtons && buttonsInside}
      />}
      <NAVIGATION gap={gap} className="image-gallery__navigation" maxWidth={maxWidth}>
        <ThumbnailGrid gutterOffset={gap} />
      </NAVIGATION>
      {hasNavButtons && <NextButton
        hasButtons={hasNavButtons}
        buttonPadding={hasNavButtons && buttonsInside}
      />}
    </SCROLLABLE>
  );
}
