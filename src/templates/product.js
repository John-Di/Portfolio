import React from "react";
import ProductPage from '../layouts/product-page';
import ProductProvider from "../providers/ProductProvider";
import ShopPageTemplate from "./shop-page";

const ProductTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {
  return (
    <ShopPageTemplate location={location} >
      <ProductProvider product={data.pageContext.product}>
        <ProductPage />
      </ProductProvider>
    </ShopPageTemplate>
  )
}

export default ProductTemplate;