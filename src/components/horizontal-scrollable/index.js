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
import useScroller from './useScroller';

export default function HorizontalScrollable({
  children,
  gap = 0.25,
  hasButtons = true,
  buttonsInside = false,
  numItems,
  index,
  setIndex,
  selectedFirst
}) {

  const ref = useRef(null);

  const { galleryState, scrollPrevious, scrollNext } = useScroller({ ref, index, setIndex, max: numItems, selectedFirst });
  const PreviousButton = <CONTROLS isDisabled={index <= 0} disabled={index <= 0} onClick={scrollPrevious} buttonsInside={buttonsInside} left><LeftChevron /></CONTROLS>;
  const NextButton = <CONTROLS isDisabled={index >= (numItems - 1)} disabled={index >= (numItems - 1)} onClick={scrollNext} buttonsInside={buttonsInside} right><RightChevron /></CONTROLS>;

  return (
    <SCROLLABLE ref={ref} className="image-gallery__scrollable" gap={gap} buttonPadding={hasButtons && buttonsInside}>
      {hasButtons && PreviousButton}
      {children}
      {hasButtons && NextButton}
    </SCROLLABLE>
  );
}
