import React from 'react';
import LocationProvider from "../providers/LocationProvider";
import PageProvider from "../providers/PageProvider";
import SiteThemeProvider from "../providers/SiteThemeProvider";
import MobileMenuFlyoutProvider from './MobileMenuFlyoutProvider';

const PageTemplateProvider = ({ location, children }) => {
  return (
    <LocationProvider location={location}>
      <SiteThemeProvider>
        <PageProvider>
          <MobileMenuFlyoutProvider>
            {children}
          </MobileMenuFlyoutProvider>
        </PageProvider>
      </SiteThemeProvider>
    </LocationProvider>
  )
}
export default PageTemplateProvider