import React, {
  useRef,
  useEffect
} from "react";
import LeftChevron from '../../images/svgs/left-chevron.svg';
import RightChevron from '../../images/svgs/right-chevron.svg';
import {
  SCROLLABLE,
  CONTROLS
} from './styles';

export default function HorizontalScrollable({
  children,
  gap = 0.25,
  hasButtons = true,
  buttonsInside = false,
  PreviousButton,
  NextButton,
  scrollRef
}) {
  return (
    <SCROLLABLE
      ref={scrollRef}
      className="image-gallery__scrollable" gap={gap}
      hasButtons={hasButtons}
      buttonPadding={hasButtons && buttonsInside}>
      {PreviousButton}
      {children}
      {NextButton}
    </SCROLLABLE>
  );
}
