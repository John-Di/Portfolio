import React, { useContext } from "react";
import Page from '../../layouts/page';
import LineItemGrid from '../../components/line-item-grid';
import PageTemplateProvider from "../../providers/PageTemplateProvider";
import StoreTemplateProvider from "../../providers/StoreTemplateProvider";
import {
  ARTICLE,
  TITLE,
} from './styles';
import LineItemList from "../../components/line-item-list";

// markup
const CartPage = ({ location = {} }) => {
  return (
    <StoreTemplateProvider location={location} >
      <PageTemplateProvider location={location}>
        <Page location={location}>
          <ARTICLE>
            <TITLE>Cart</TITLE>
            <LineItemList />
          </ARTICLE>
        </Page>
      </PageTemplateProvider>
    </StoreTemplateProvider >
  )
}

export default CartPage;