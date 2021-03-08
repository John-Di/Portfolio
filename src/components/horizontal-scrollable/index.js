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
  numItem,
  index,
  setIndex,
  selectedFirst
}) {

  const ref = useRef(null);

  const { galleryState, scrollPrevious, scrollNext } = useScroller({ ref, index, setIndex, max: numItem, selectedFirst });

  return (
    <SCROLLABLE ref={ref} className="image-gallery__scrollable" gap={gap} buttonPadding={hasButtons && buttonsInside}>
      {hasButtons && (index > 0 && numItem > 4) && <CONTROLS onClick={scrollPrevious.bind(this, galleryState.index - 1)} buttonsInside={buttonsInside} left><LeftChevron /></CONTROLS>}
      {children}
      {hasButtons && (index < numItem - 1 && numItem > 4) && <CONTROLS onClick={scrollNext.bind(this, galleryState.index + 1)} buttonsInside={buttonsInside} right><RightChevron /></CONTROLS>}
    </SCROLLABLE>
  );
}
