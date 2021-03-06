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
  const swatchEl = useRef(null);
  let Swatch = SwatchType(name);


  const optionOnChange = value => {
    updateOption({
      type: 'option', selected: {
        name,
        value
      }
    })
  }

  return (
    <SWATCHES gutterOffset={gap}>
      {
        arrayToJSXList(values, (value, i) => (
          <Swatch
            swatchRef={swatchEl}
            gutter={gap}
            id={`swatch-${value.replace('#', '')}-${Date.now()}`}
            isCurrent={selected === value}
            value={value}
            key={i}
            toggleSwatch={() => {
              optionOnChange(value);
            }}
          />
        ))
      }
    </SWATCHES>
  );
}
