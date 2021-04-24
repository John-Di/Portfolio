import React from 'react';
import PageContext from '../contexts/PageContext';
import usePageNavigation from '../hooks/usePageNavigation';

const PageProvider = ({ children }) => {
  return (
    <PageContext.Provider value={usePageNavigation()} >
      {children}
    </PageContext.Provider>
  )
}
export default PageProvider;