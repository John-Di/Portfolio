import React from "react";
import ArtProductPage from "../layouts/art-product-page";
import ProductProvider from "../providers/ProductProvider";
import ShopPageTemplate from "./shop-page";

const ArtTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {
  console.log('ArtTemplate', data);
  return (
    <ShopPageTemplate location={location} >
      <ProductProvider product={data.pageContext.product}>
        <ArtProductPage />
      </ProductProvider>
    </ShopPageTemplate>
  )
}

export default ArtTemplate;