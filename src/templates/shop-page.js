import React from "react";
import ProductPage from '../layouts/product-page';
import ShopProvider from "../providers/ShopProvider";
import ProductProvider from "../providers/ProductProvider";
import useLocation from "../hooks/useLocation";
import PageTemplateProvider from "../providers/PageTemplateProvider";
import StoreTemplateProvider from "../providers/StoreTemplateProvider";
import Page from "../layouts/page";

const ShopPageTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {

  console.log('ProductTemplate.location', location);
  console.log('ProductTemplate.location.state', location.state);

  return (
    <StoreTemplateProvider location={location} >
      <PageTemplateProvider location={location}>
        <Page location={location}>
          {children}
        </Page>
      </PageTemplateProvider>
    </StoreTemplateProvider>
  )
}

export default ShopPageTemplate;
