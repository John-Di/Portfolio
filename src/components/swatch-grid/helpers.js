import * as React from "react";
import SwatchGrid from "../swatch-grid";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import ProductOptionSelector from "../../components/product-option-selector";
import StringToNumber from '../../utils/StringToNumber';
import ColorSwatch from "../color-swatch";
import TextSwatch from "../text-swatch";

export const SwatchType = (name) => {
  let type = StringToNumber(name);
  if (type === StringToNumber('color')) {
    return ColorSwatch;
  }
  return TextSwatch;
}

export const OptionSelector = (SetVariantId, option, i) => {
  console.log('OptionSelector', option, i);
  const { name, values } = option;
  const { length = 0 } = values;
  let options = length > 1 ?
    <SwatchGrid {...option} Swatch={SwatchType(name)} /> :
    <input type="hidden" name={`${name}`} value={values[0].value} />;

  return options;
}