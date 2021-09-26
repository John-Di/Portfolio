import React from "react";
import ProductContext from '../../contexts/ProductContext';
import ProductFormContext from '../../contexts/ProductFormContext';
import useProductForm from "../../hooks/useProductForm";

const ProductProvider = ({
  product = { variants: [], },
  staticOptions = [],
  hiddenOptions = [],
  children
}) => {
  return (
    <ProductContext.Provider value={{
      ...product,
      description: 'Lorem Ipsum Delorum Ipsum',
    }}>
      <ProductFormContext.Provider value={{
        ...useProductForm({
          product
        }),
        staticOptions,
        hiddenOptions
      }}>
        {children}
      </ProductFormContext.Provider>
    </ProductContext.Provider>
  )
}

export default ProductProvider;
