import React from "react";
import CollectionPage from "../layouts/collection-page";
import DesignsPage from "../layouts/designs-page";
import CollectionProvider from "../providers/CollectionProvider";
import ShopPageTemplate from "./shop-page";

const CollectionTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {
  const products = data.pageContext.products.map(({ node }) => node);
  // console.log('products', products)

  return (
    <ShopPageTemplate location={location} >
      <CollectionProvider products={products}>
        <CollectionPage products={products} />
      </CollectionProvider>
    </ShopPageTemplate>
  )
}

export default CollectionTemplate;
