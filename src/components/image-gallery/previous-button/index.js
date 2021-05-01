import React, { useContext } from "react";
import GalleryContext from "../../../contexts/GalleryContext";
import LeftChevron from '../../../images/svgs/left-chevron.svg';
import {
  PREVIOUS
} from './styles';

export default function PreviousButton({
  buttonsInside = false
}) {
  const {
    hasNavButtons,
    atBeginning,
    scrollPrevious
  } = useContext(GalleryContext),
    onClick = e => {
      e.preventDefault();
      console.log('scrollPrevious', 'atBeginning');
      scrollPrevious();
    };

  return (
    <PREVIOUS
      buttonPadding={hasNavButtons && buttonsInside}
      isDisabled={atBeginning}
      buttonsInside={buttonsInside}
      onClick={onClick}
    >
      <LeftChevron />
    </PREVIOUS>
  );
}
