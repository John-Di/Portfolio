import React from "react";
import CollectionPage from "../layouts/collection-page";
import ShopPageTemplate from "./shop-page";

const CollectionTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {
  console.log('CollectionTemplate', data.pageContext.products.map(({ node }) => node))
  const products = data.pageContext.products.map(({ node }) => node),
    titles = products.map(({ title }) => title);
  return (
    <ShopPageTemplate location={location} >
      <CollectionPage products={products} />
    </ShopPageTemplate>
  )
}

export default CollectionTemplate;
