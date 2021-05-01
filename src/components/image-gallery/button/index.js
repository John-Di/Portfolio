import React, { useContext } from "react";
import GalleryContext from "../../../contexts/GalleryContext";
import LeftChevron from '../../../images/svgs/left-chevron.svg';
import {
  BUTTON
} from './styles';

export default function Button({
  buttonInside = false,
  isPrev,
  children
}) {
  const {
    hasNavButtons,
    atBeginning,
    atEnd,
    scrollNext,
    scrollPrevious
  } = useContext(GalleryContext),
    scrollSlide = isPrev ? scrollPrevious : scrollNext,
    onClick = e => {
      e.preventDefault();
      scrollSlide();
    };

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
