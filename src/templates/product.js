import React from "react";
import ProductPage from '../layouts/product-page';
import ShopProvider from "../providers/ShopProvider";
import ProductProvider from "../providers/ProductProvider";
import useLocation from "../hooks/useLocation";
import PageTemplateProvider from "../providers/PageTemplateProvider";
import StoreTemplateProvider from "../providers/StoreTemplateProvider";

const ProductTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {

  console.log('ProductTemplate.location', location);
  console.log('ProductTemplate.location.state', location.state);

  return (
    <StoreTemplateProvider location={location} >
      <ProductProvider product={data.pageContext.product}>
        <PageTemplateProvider location={location}>
          <ProductPage location={location} />
        </PageTemplateProvider>
      </ProductProvider>
    </StoreTemplateProvider>
  )
}

export default ProductTemplate;
