import React from "react";
import CollectionPage from "../layouts/collection-page";
import DesignsPage from "../layouts/designs-page";
import CollectionProvider from "../providers/CollectionProvider";
import ShopPageTemplate from "./shop-page";

const DesignTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {
  const {
    products = [],
    ...design
  } = data.pageContext,
    titles = products.map(({ title }) => title);

  return (
    <ShopPageTemplate location={location} >
      <CollectionProvider products={products}>
        <CollectionPage {...design} />
      </CollectionProvider>
    </ShopPageTemplate>
  )
}

export default DesignTemplate;
