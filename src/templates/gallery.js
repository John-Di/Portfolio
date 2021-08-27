import React from "react";
import CollectionPage from "../layouts/collection-page";
import DesignsPage from "../layouts/designs-page";
import CollectionProvider from "../providers/CollectionProvider";
import ShopPageTemplate from "./shop-page";

const GalleryTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {
  const {
    designs = []
  } = data.pageContext;

  return (
    <ShopPageTemplate location={location}>
      <DesignsPage designs={designs} />
    </ShopPageTemplate>
  )
}

export default GalleryTemplate;
