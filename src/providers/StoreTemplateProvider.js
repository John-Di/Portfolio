import React from 'react';
import CartFlyoutProvider from './CartFlyoutProvider';
import ShopProvider from './ShopProvider';

const StoreTemplateProvider = ({ location, children }) => {
  return (
    <ShopProvider>
      <CartFlyoutProvider location={location}>
        {children}
      </CartFlyoutProvider>
    </ShopProvider>
  )
}
export default StoreTemplateProvider