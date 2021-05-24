import React from 'react';
import LocationProvider from "../providers/LocationProvider";
import PageProvider from "../providers/PageProvider";
import SiteThemeProvider from "../providers/SiteThemeProvider";

const PageTemplateProvider = ({ location, children }) => {
  return (
    <LocationProvider location={location}>
      <SiteThemeProvider>
        <PageProvider>
          {children}
        </PageProvider>
      </SiteThemeProvider>
    </LocationProvider>
  )
}
export default PageTemplateProvider