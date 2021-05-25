import React from "react";
import ProductPage from '../layouts/product-page';
import ShopProvider from "../providers/ShopProvider";
import ProductProvider from "../providers/ProductProvider";
import useLocation from "../hooks/useLocation";
import PageTemplateProvider from "../providers/PageTemplateProvider";
import ShopPageTemplate from "./shop-page";

const ProductTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {

  console.log('ProductTemplate.location', location);
  console.log('ProductTemplate.location.state', location.state);

  return (
    <ShopPageTemplate location={location} >
      <ProductProvider product={data.pageContext.product}>
        <ProductPage location={location} />
      </ProductProvider>
    </ShopPageTemplate>
  )
}

export default ProductTemplate;
