import React, {
  useState,
  useRef
} from "react";
import {
  arrayToJSXList
} from '../../utils/dom-builder';
import {
  SWATCHES
} from './styles';


export default function SwatchGrid({
  values = [],
  gap = 0.25,
  Swatch
}) {
  const [currentSwatch, setCurrentSwatch] = useState(-1);
  const swatchEl = useRef(null);

  return (
    <SWATCHES gutterOffset={gap}>
      {
        arrayToJSXList(values, (value, i) => (
          <Swatch swatchRef={swatchEl} gutter={gap} id={`swatch-${value.replace('#', '')}-${Date.now()}`} isCurrent={currentSwatch === i} value={value} key={i} toggleSwatch={setCurrentSwatch.bind(this, i)} />
        ))
      }
    </SWATCHES>
  );
}
