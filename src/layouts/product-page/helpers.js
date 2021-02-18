import * as React from "react";
import ProductColorSelector from "../../components/product-color-selector";
import ProductOptionSelector from "../../components/product-option-selector";

export const OptionSelector = (option, i) => {
  let OptionSelector = ProductOptionSelector;
  if (option.colors) {
    OptionSelector = ProductColorSelector;
  }

  return <OptionSelector key={i} {...option} />;
}