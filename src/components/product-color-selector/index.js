import * as React from "react";
import SwatchGrid from "../swatch-grid";
import ColorSwatch from "../color-swatch";
import {
  FIELDSET,
  LEGEND
} from './styles';
// markup
const ProductColorSelector = ({ name = "Option Name", colors = [] }) => {
  let number_values = colors.length;

  let options = number_values > 1 ? <SwatchGrid name={name} values={colors} Swatch={ColorSwatch} /> : <input type="hidden" name={`${name}`} value={colors[0].value} />;

  return (
    <FIELDSET>
      <LEGEND>{name}</LEGEND>
      {options}
    </FIELDSET>
  )
}

export default ProductColorSelector;