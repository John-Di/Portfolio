import React from "react";
import Page from '../layouts/page';
import PageTemplateProvider from "../providers/PageTemplateProvider";

const PageTemplate = ({ location = {}, children }) => {

  return (
    <PageTemplateProvider location={location}>
      <Page>
        {children}
      </Page>
    </PageTemplateProvider>
  )
}

export default PageTemplate;
