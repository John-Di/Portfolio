import React from 'react';
import Client from 'shopify-buy';

import ShopContext from '../contexts/ShopContext';
import useShop from '../hooks/useShop';

const ShopProvider = ({ children }) => {
  return (
    <ShopContext.Provider value={useShop()} >
      {children}
    </ShopContext.Provider>
  )
}
export default ShopProvider