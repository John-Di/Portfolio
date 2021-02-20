import React, { Children } from "react";
import {
  arrayToJSXList
} from '../../utils/dom-builder';
import {
  SWATCHES,
  SWATCH,
  INPUT,
  LABEL,
  VALUE
} from './styles';

export default function Swatch({
  name = "Option Name",
  value = [],
  gap = 0.25,
  textHidden = false,
  borderColor = `#000000`,
  backgroundColor = `#FFFFFF`
}) {
  return (
    <SWATCH gutter={gap}>
      <INPUT id={`swatch-${value}`} type="radio" name={name} />
      <LABEL htmlFor={`swatch-${value}`} backgroundColor={backgroundColor} borderColor={borderColor}>
        <VALUE
          isHidden={textHidden}
          case={'uppercase'}
        >{value}</VALUE>
      </LABEL>
    </SWATCH>
  );
}
