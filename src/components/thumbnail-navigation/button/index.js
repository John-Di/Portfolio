import React, { useContext } from "react";
import GalleryContext from "../../../contexts/GalleryContext";
import {
  BUTTON
} from './styles';

export default function Button({
  buttonInside = false,
  isPrev,
  children
}) {
  const {
    atBeginning,
    atEnd,
    scrollNextOption,
    scrollPreviousOption,
    images
  } = useContext(GalleryContext),
    scrollSlide = isPrev ? scrollPreviousOption : scrollNextOption,
    onClick = e => {
      e.preventDefault();
      scrollSlide();
    },
    hasNavButtons = images.length > 4;

  return (
    <BUTTON
      isPrev={isPrev}
      buttonPadding={hasNavButtons && buttonInside}
      isDisabled={isPrev ? atBeginning : atEnd}
      buttonInside={buttonInside}
      onClick={onClick}
    >
      {children}
    </BUTTON>
  );
}
