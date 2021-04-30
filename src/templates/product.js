import React from "react";
import ProductPage from '../layouts/product-page';
import ShopProvider from "../providers/ShopProvider";
import ProductProvider from "../providers/ProductProvider";

const ProductTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {

  // console.log('location', location);
  // console.log('location.state', location.state);

  return (
    <ShopProvider>
      <ProductProvider product={data.pageContext.product}>
        <ProductPage location={location} />
      </ProductProvider>
    </ShopProvider>
  )
}

export default ProductTemplate;
