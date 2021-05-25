import React from "react";
import useProduct from '../hooks/useProduct';
import ProductContext from '../contexts/ProductContext';
import ProductFormContext from '../contexts/ProductFormContext';

const LineItemProvider = ({ lineItem = {}, children }) => {

  let selectedVariant = lineItem.variant;

  return (
    <ProductContext.Provider value={lineItem}>
      <ProductFormContext.Provider value={useProduct({ product: lineItem, selectedVariant })}>
        {children}
      </ProductFormContext.Provider>
    </ProductContext.Provider>
  )
}

export default LineItemProvider;
