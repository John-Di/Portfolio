import React from "react";
import CollectionPage from "../layouts/collection-page";
import CollectionProvider from "../providers/CollectionProvider";
import ShopPageTemplate from "./shop-page";

const CollectionTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {
  const products = data.pageContext.products.map(({ node }) => node),
    titles = products.map(({ title }) => title);

  return (
    <ShopPageTemplate location={location} >
      <CollectionProvider products={products}>
        <CollectionPage products={products} />
      </CollectionProvider>
    </ShopPageTemplate>
  )
}

export default CollectionTemplate;
