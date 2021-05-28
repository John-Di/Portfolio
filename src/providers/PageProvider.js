import React, { useContext } from 'react';
import MobileMenuFlyoutContext from '../contexts/MobileMenuFlyoutContext';
import PageContext from '../contexts/PageContext';
import useFlyout from '../hooks/useFlyout';
import usePageNavigation from '../hooks/usePageNavigation';

const PageProvider = ({ children }) => {

  return (
    <MobileMenuFlyoutContext.Provider value={useFlyout()}>
      <PageContext.Provider value={usePageNavigation()}>
        {children}
      </PageContext.Provider>
    </MobileMenuFlyoutContext.Provider>
  )
}
export default PageProvider;