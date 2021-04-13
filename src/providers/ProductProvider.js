import React from "react";
import useProduct from '../hooks/useProduct';
import ProductContext from '../contexts/ProductContext';
import ProductFormContext from '../contexts/ProductFormContext';

const ProductProvider = ({ product = {}, children }) => {

  let selectedVariant = product.variants[0];

  return (
    <ProductContext.Provider value={product}>
      <ProductFormContext.Provider value={useProduct({ product, selectedVariant })}>
        {children}
      </ProductFormContext.Provider>
    </ProductContext.Provider>
  )
}

export default ProductProvider;
