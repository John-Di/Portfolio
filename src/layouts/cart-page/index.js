import React from "react";
import Page from '../../layouts/page';
import {
  ARTICLE,
  TITLE,
  LINEITEMS
} from './styles';
import LineItemList from "../../components/line-item-list";

// markup
const CartPage = ({ location = {} }) => {
  return (
    <ARTICLE>
      <TITLE>Cart</TITLE>
      <LINEITEMS>
        <LineItemList />
      </LINEITEMS>
    </ARTICLE>
  )
}

export default CartPage;