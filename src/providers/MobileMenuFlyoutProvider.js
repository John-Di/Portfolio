import React from 'react';
import MobileMenuFlyoutContext from '../contexts/MobileMenuFlyoutContext';
import useFlyout from '../hooks/useFlyout';

const MobileMenuFlyoutProvider = ({ children }) => {
  return (
    <MobileMenuFlyoutContext.Provider value={useFlyout()} >
      {children}
    </MobileMenuFlyoutContext.Provider>
  )
}
export default MobileMenuFlyoutProvider;