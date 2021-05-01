import React from "react";
import Overlay from '../components/overlay';
import Page from '../layouts/page';
import LocationProvider from "../providers/LocationProvider";
import PageProvider from "../providers/PageProvider";
import ThemeProvider from "../providers/ThemeProvider";

const PageTemplate = ({ location = {}, children }) => {

  return (
    <LocationProvider location={location}>
      <ThemeProvider location={location}>
        <PageProvider>
          <Page>
            {children}
            <Overlay />
          </Page>
        </PageProvider>
      </ThemeProvider>
    </LocationProvider>
  )
}

export default PageTemplate;
