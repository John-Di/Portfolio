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

export default function SwatchGrid({
  name = "Option Name",
  values = [],
  gap = 0.25,
  Swatch
}) {
  return (
    <SWATCHES gutterOffset={gap}>
      {
        arrayToJSXList(values, (value, i) => (
          <Swatch gutter={gap} value={value} key={i} />
        ))
      }
    </SWATCHES>
  );
}
