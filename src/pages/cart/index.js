import React from "react";
import CartPage from '../../layouts/cart-page';
import ShopProvider from "../../providers/ShopProvider";
import StoreTemplateProvider from "../../providers/StoreTemplateProvider";
import LocationProvider from "../../providers/LocationProvider";
import useLocation from "../../hooks/useLocation";

// markup
const Cart = ({ location = {} }) => {
  console.log('Cart.location', location);
  return (
    <StoreTemplateProvider location={location}>
      <CartPage />
    </StoreTemplateProvider>
  )
}

export default Cart;
