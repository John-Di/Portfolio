import * as React from "react";
import ProductColorSelector from "../../components/product-color-selector";
import ProductOptionSelector from "../../components/product-option-selector";
import StringToNumber from '../../utils/StringToNumber';


export const OptionSelector = (option, i) => {
  let Selector = ProductOptionSelector;

  let type = StringToNumber(option.type);

  if (type === StringToNumber('color')) {
    Selector = ProductColorSelector;
  } else if (type === StringToNumber('size')) {
    Selector = ProductOptionSelector;
  } else if (type === StringToNumber('designcolor')) {
    Selector = ProductColorSelector;
  }

  return (<Selector key={i} {...option} />);
}