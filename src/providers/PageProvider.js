import React, { useContext } from 'react';
import CartFlyoutContext from '../contexts/CartFlyoutContext';
import PageContext from '../contexts/PageContext';
import usePageNavigation from '../hooks/usePageNavigation';

const PageProvider = ({ children }) => {

  let flyoutContext = useContext(CartFlyoutContext);
  let isOpen = false;

  if (flyoutContext) {
    isOpen = flyoutContext.isOpen
  }

  return (
    <PageContext.Provider value={usePageNavigation({ isOpen })}>
      {children}
    </PageContext.Provider>
  )
}
export default PageProvider;