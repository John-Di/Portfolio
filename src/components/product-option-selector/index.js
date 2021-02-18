import * as React from "react";
import SwatchGrid from "../swatch-grid";
import Swatch from "../swatch";
import {
  FIELDSET,
  LEGEND
} from './styles';
// markup
const ProductOptionSelector = ({ name = "Option Name", values = [], children }) => {
  let number_values = values.length;

  let options = number_values > 1 ? <SwatchGrid name={name} values={values} Swatch={Swatch} /> : <input type="hidden" name={`${name}`} value={values[0].value} />;

  return (
    <FIELDSET>
      <LEGEND>{name}</LEGEND>
      {options}
    </FIELDSET>
  )
}

export default ProductOptionSelector;