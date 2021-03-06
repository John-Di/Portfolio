import React, {
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
  name,
  updateOption,
  selected
}) {
  let Swatch = SwatchType(name);

  return (
    <SWATCHES gutterOffset={gap}>
      {
        arrayToJSXList(values, (value, i) => (
          <Swatch
            gutter={gap}
            id={`swatch-${value.replace('#', '')}-${Date.now()}`}
            isCurrent={selected === value}
            value={value}
            key={i}
            toggleSwatch={() => updateOption({ name, value })}
          />
        ))
      }
    </SWATCHES>
  );
}
