import React from "react";
import CartPage from '../../layouts/cart-page';
import ShopProvider from "../../providers/ShopProvider";
import ProductProvider from "../../providers/ProductProvider";

// markup
const Cart = () => {
  return (
    <ShopProvider>
      <CartPage />
    </ShopProvider>
  )
}

export default Cart;
