import * as React from "react";
import ProductColorSelector from "../../components/product-color-selector";
import ProductOptionSelector from "../../components/product-option-selector";
import StringToNumber from '../../utils/StringToNumber';


export const OptionSelector = (option, i) => {
  let OptionSelector = ProductOptionSelector;

  let type = StringToNumber(option.type);

  if (type === StringToNumber('color')) {
    OptionSelector = ProductColorSelector;
  } else if (type === StringToNumber('size')) {
    OptionSelector = OptionSelector;
  } else if (type === StringToNumber('designcolor')) {
    OptionSelector = ProductColorSelector;
  }

  return <OptionSelector key={i} {...option} />;
}