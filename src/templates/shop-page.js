import React from "react";
import PageTemplateProvider from "../providers/PageTemplateProvider";
import StoreTemplateProvider from "../providers/StoreTemplateProvider";
import Page from "../layouts/page";

const ShopPageTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {

  return (
    <StoreTemplateProvider>
      <PageTemplateProvider location={location}>
        <Page location={location}>
          {children}
        </Page>
      </PageTemplateProvider>
    </StoreTemplateProvider>
  )
}

export default ShopPageTemplate;
