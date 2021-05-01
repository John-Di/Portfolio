import React, { useContext } from "react";
import GalleryContext from "../../../contexts/GalleryContext";
import RightChevron from '../../../images/svgs/right-chevron.svg';
import {
  NEXT
} from './styles';

export default function NextButton({
  buttonsInside = false
}) {
  const {
    hasNavButtons,
    atEnd,
    scrollNext
  } = useContext(GalleryContext),
    onClick = e => {
      e.preventDefault();
      console.log('scrollNext', 'atBeginning');
      scrollNext();
    };

  return (
    <NEXT
      buttonPadding={hasNavButtons && buttonsInside}
      isDisabled={atEnd}
      buttonsInside={buttonsInside}
      onClick={onClick}
    >
      <RightChevron />
    </NEXT>
  );
}
