import React from 'react';
import CartFlyoutProvider from './CartFlyoutProvider';
import ShopProvider from './ShopProvider';

const StoreTemplateProvider = ({ children }) => {
  return (
    <ShopProvider>
      <CartFlyoutProvider>
        {children}
      </CartFlyoutProvider>
    </ShopProvider>
  )
}
export default StoreTemplateProvider