import React, { useContext } from "react";
import LineItemGrid from '../../components/line-item-grid';
import PageTemplateProvider from "../../providers/PageTemplateProvider";
import StoreTemplateProvider from "../../providers/StoreTemplateProvider";
import {
  ARTICLE,
  TITLE,
} from './styles';

// markup
const CartPage = ({ location = {} }) => {
  return (
    <StoreTemplateProvider location={location} >
      <PageTemplateProvider location={location}>
        <ARTICLE>
          <TITLE>Cart</TITLE>
          <LineItemGrid />
        </ARTICLE>
      </PageTemplateProvider>
    </StoreTemplateProvider>
  )
}

export default CartPage;