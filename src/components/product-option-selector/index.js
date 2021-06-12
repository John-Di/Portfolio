import React from "react";
import {
  FIELDSET,
  LEGEND
} from './styles';

// markup
const ProductOptionSelector = ({ name = "Option Name", isHidden = false, hasLabel = true, children }) => {
  return (
    <FIELDSET isHidden={isHidden}>
      <LEGEND isHidden={!hasLabel}>{name}</LEGEND>
      {children}
    </FIELDSET>
  )
}

export default ProductOptionSelector;