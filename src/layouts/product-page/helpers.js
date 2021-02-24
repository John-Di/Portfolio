import * as React from "react";
import SwatchGrid from "../../components/swatch-grid";
import ProductOptionSelector from "../../components/product-option-selector";
import StringToNumber from '../../utils/StringToNumber';
import ColorSwatch from "../../components/color-swatch";
import TextSwatch from "../../components/text-swatch";

const SwatchType = (name) => {
  let type = StringToNumber(name);
  if (type === StringToNumber('color')) {
    return ColorSwatch;
  }
  return TextSwatch;
}

export const OptionSelector = (option, i) => {
  const { name, values } = option;
  const { length = 0 } = values;
  let options = length > 1 ?
    <SwatchGrid {...option} Swatch={SwatchType(name)} /> :
    <input type="hidden" name={`${name}`} value={values[0].value} />;

  return (
    <ProductOptionSelector key={i} name={name}>
      {options}
    </ProductOptionSelector>
  );
}