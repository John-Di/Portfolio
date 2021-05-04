import React from 'react';
import CartFlyoutContext from '../contexts/CartFlyoutContext';
import useFlyout from '../hooks/useFlyout';

const CartFlyoutProvider = ({ location, children }) => {
  return (
    <CartFlyoutContext.Provider value={useFlyout({ location })} >
      {children}
    </CartFlyoutContext.Provider>
  )
}
export default CartFlyoutProvider;