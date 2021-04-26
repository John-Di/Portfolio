import React from "react";
import ProductPage from '../layouts/product-page';
import ShopProvider from "../providers/ShopProvider";
import ProductProvider from "../providers/ProductProvider";

const ProductTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {

  // console.log('location', location);
  // console.log('location.state', location.state);

  let { product } = data.pageContext;

  return (
    <ShopProvider>
      <ProductProvider product={product}>
        <ProductPage />
      </ProductProvider>
    </ShopProvider>
  )
}

export default ProductTemplate;
