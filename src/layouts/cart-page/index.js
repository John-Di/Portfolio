import React from "react";
import PageTemplate from '../../templates/page';
import LineItemGrid from '../../components/line-item-grid';
import {
  ARTICLE,
  TITLE,
} from './styles';

// markup
const CartPage = () => {
  return (
    <PageTemplate>
      <ARTICLE>
        <TITLE>Cart</TITLE>
        <LineItemGrid />
      </ARTICLE>
    </PageTemplate>
  )
}

export default CartPage;
