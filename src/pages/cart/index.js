import React from "react";
import CartPage from '../../layouts/cart-page';
import ShopProvider from "../../providers/ShopProvider";
import StoreTemplateProvider from "../../providers/StoreTemplateProvider";
import LocationProvider from "../../providers/LocationProvider";
import ShopPageTemplate from "../../templates/shop-page";
import useLocation from "../../hooks/useLocation";

// markup
const Cart = ({ location = {} }) => {
  return (
    <ShopPageTemplate location={location}>
      <CartPage />
    </ShopPageTemplate >
  )
}

export default Cart;
