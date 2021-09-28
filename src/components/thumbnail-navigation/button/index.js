import React, { useContext } from "react";
import GalleryContext from "../../../contexts/GalleryContext";
import {
  BUTTON
} from './styles';

export default function Button({
  buttonInside = false,
  isPrev,
  children,
  isDisabled = false,
  scrollSlide,
  hasPadding,
  images = []
}) {
  const onClick = e => {
    e.preventDefault();
    scrollSlide();
  };
  console.log('Button.isPrev', isPrev)
  console.log('Button.isDisabled', isDisabled)
  console.log('Button.isDisabled', '---------')


  return (
    <BUTTON
      isPrev={isPrev}
      buttonPadding={hasPadding}
      isDisabled={isDisabled}
      disabled={isDisabled}
      buttonInside={buttonInside}
      onClick={onClick}
    >
      {children}
    </BUTTON>
  );
}
