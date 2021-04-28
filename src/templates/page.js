import React from "react";
import Overlay from '../components/overlay';
import Page from '../layouts/page';
import PageProvider from "../providers/PageProvider";
import ThemeProvider from "../providers/ThemeProvider";

const PageTemplate = ({ children }) => {

  return (
    <ThemeProvider>
      <PageProvider>
        <Page>
          {children}
          <Overlay />
        </Page>
      </PageProvider>
    </ThemeProvider>
  )
}

export default PageTemplate;
