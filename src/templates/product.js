import React from "react";
import ProductPage from '../layouts/product-page';
import ShopProvider from "../providers/ShopProvider";
import ProductProvider from "../providers/ProductProvider";
import useLocation from "../hooks/useLocation";
import LocationProvider from "../providers/LocationProvider";

const ProductTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {

  console.log('ProductTemplate.location', location);
  console.log('ProductTemplate.location.state', location.state);

  return (
    <LocationProvider location={location}>
      <ShopProvider>
        <ProductProvider product={data.pageContext.product}>
          <ProductPage location={location} />
        </ProductProvider>
      </ShopProvider>
    </LocationProvider>
  )
}

export default ProductTemplate;
