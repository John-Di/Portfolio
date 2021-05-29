import React from "react";
import PageTemplateProvider from "../providers/PageTemplateProvider";
import StoreTemplateProvider from "../providers/StoreTemplateProvider";
import Page from "../layouts/page";

const ShopPageTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {

  return (
    <PageTemplateProvider location={location}>
      <StoreTemplateProvider>
        <Page>
          {children}
        </Page>
      </StoreTemplateProvider>
    </PageTemplateProvider>
  )
}

export default ShopPageTemplate;
