import React from 'react';
import LocationProvider from "../providers/LocationProvider";
import PageProvider from "../providers/PageProvider";
import ThemeProvider from "../providers/ThemeProvider";

const PageTemplateProvider = ({ location, children }) => {
  return (
    <LocationProvider location={location}>
      <ThemeProvider location={location}>
        <PageProvider>
          {children}
        </PageProvider>
      </ThemeProvider>
    </LocationProvider>
  )
}
export default PageTemplateProvider