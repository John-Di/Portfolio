import React, { useContext } from "react";
import Page from '../../layouts/page';
import LineItemGrid from '../../components/line-item-grid';
import PageTemplateProvider from "../../providers/PageTemplateProvider";
import StoreTemplateProvider from "../../providers/StoreTemplateProvider";
import {
  ARTICLE,
  TITLE,
  LINEITEMS
} from './styles';
import LineItemList from "../../components/line-item-list";

// markup
const CartPage = ({ location = {} }) => {
  return (
    <Page location={location}>
      <ARTICLE>
        <TITLE>Cart</TITLE>
        <LINEITEMS>
          <LineItemList />
        </LINEITEMS>
      </ARTICLE>
    </Page>
  )
}

export default CartPage;