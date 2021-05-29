import React from "react";
import CartPage from '../../layouts/cart-page';
import ShopPageTemplate from "../../templates/shop-page";

// markup
const Cart = ({ location = {} }) => {
  return (
    <ShopPageTemplate location={location}>
      <CartPage />
    </ShopPageTemplate >
  )
}

export default Cart;
