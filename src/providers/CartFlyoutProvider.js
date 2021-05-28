import React from 'react';
import CartFlyoutContext from '../contexts/CartFlyoutContext';
import useFlyout from '../hooks/useFlyout';

const CartFlyoutProvider = ({ children }) => {
  return (
    <CartFlyoutContext.Provider value={useFlyout()} >
      {children}
    </CartFlyoutContext.Provider>
  )
}
export default CartFlyoutProvider;