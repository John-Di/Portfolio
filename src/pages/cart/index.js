import React from "react";
import CartPage from '../../layouts/cart-page';
import ShopProvider from "../../providers/ShopProvider";
import ProductProvider from "../../providers/ProductProvider";
import LocationProvider from "../../providers/LocationProvider";
import useLocation from "../../hooks/useLocation";

// markup
const Cart = ({ location = {} }) => {
  console.log('Cart.location', location);
  return (
    <LocationProvider location={location}>
      <ShopProvider>
        <CartPage />
      </ShopProvider>
    </LocationProvider>
  )
}

export default Cart;
