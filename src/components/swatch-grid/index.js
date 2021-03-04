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
import {
  SwatchType
} from './helpers';



export default function SwatchGrid({
  values = [],
  gap = 0.25,
  name
}) {
  const [currentSwatch, setCurrentSwatch] = useState(-1);
  const swatchEl = useRef(null);
  let Swatch = SwatchType(name);

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
