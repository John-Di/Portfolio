import React from "react";
import LeftChevron from '../../images/svgs/left-chevron.svg';
import RightChevron from '../../images/svgs/right-chevron.svg';
import {
  SCROLLABLE,
  CONTROLS
} from './styles';

export default function HorizontalScrollable({
  children,
  gap = 0.25,
  hasButtons = false,
  buttonsInside = false }) {
  // const [index, setIndex] = useState(0);

  return (
    <SCROLLABLE className="image-gallery__scrollable" gap={gap} buttonPadding={hasButtons && buttonsInside}>
      {hasButtons && <CONTROLS buttonsInside={buttonsInside} left><LeftChevron /></CONTROLS>}
      {children}
      {hasButtons && <CONTROLS buttonsInside={buttonsInside} right><RightChevron /></CONTROLS>}
    </SCROLLABLE>
  );
}
