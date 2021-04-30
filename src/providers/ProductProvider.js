import React from "react";
import useProductForm from '../hooks/useProductForm';
import ProductContext from '../contexts/ProductContext';
import ProductFormContext from '../contexts/ProductFormContext';

const ProductProvider = ({ product = {}, children }) => {

  console.log('ProductProvider', product)
  let selectedVariant = product.variants[0];

  return (
    <ProductContext.Provider value={product}>
      <ProductFormContext.Provider value={useProductForm({ product, selectedVariant })}>
        {children}
      </ProductFormContext.Provider>
    </ProductContext.Provider>
  )
}

export default ProductProvider;
