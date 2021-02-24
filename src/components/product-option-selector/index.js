import React from "react";
import {
  FIELDSET,
  LEGEND
} from './styles';

// markup
const ProductOptionSelector = ({ name = "Option Name", values = [], swatch, children }) => {
  return (
    <FIELDSET>
      <LEGEND>{name}</LEGEND>
      {children}
    </FIELDSET>
  )
}

export default ProductOptionSelector;