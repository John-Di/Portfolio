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

  return (
    <SCROLLABLE ref={ref} className="image-gallery__scrollable" gap={gap} buttonPadding={hasButtons && buttonsInside}>
      {hasButtons && <CONTROLS isDisabled={index <= 0} disabled={index <= 0} onClick={scrollPrevious.bind(this, galleryState.index - 1)} buttonsInside={buttonsInside} left><LeftChevron /></CONTROLS>}
      {children}
      {hasButtons && <CONTROLS isDisabled={index >= (numItems - 1)} disabled={index >= (numItems - 1)} onClick={scrollNext.bind(this, galleryState.index + 1)} buttonsInside={buttonsInside} right><RightChevron /></CONTROLS>}
    </SCROLLABLE>
  );
}
