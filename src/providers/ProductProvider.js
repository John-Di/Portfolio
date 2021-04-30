import React, { useContext } from "react";
import useProductForm from '../hooks/useProductForm';
import ProductContext from '../contexts/ProductContext';
import ProductFormContext from '../contexts/ProductFormContext';
import ShopContext from "../contexts/ShopContext";

const ProductProvider = ({ product = {}, children }) => {

  let selectedVariant = product.variants[0];

  return (
    <ProductContext.Provider value={product}>
      <ProductFormContext.Provider value={useProductForm({ product, selectedVariant, shop: useContext(ShopContext) })}>
        {children}
      </ProductFormContext.Provider>
    </ProductContext.Provider>
  )
}

export default ProductProvider;
