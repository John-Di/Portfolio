import React from "react";
import PageTemplate from '../../templates/page';
import LineItemGrid from '../../components/line-item-grid';
import {
  randomColor
} from '../../utils/randoms';
import {
  ARTICLE,
  TITLE,
} from './styles';

// markup
const CartPage = ({ accentColor = randomColor(), ...items }) => {
  return (
    <PageTemplate
      accentColor={accentColor}
      activeHeader={true}
      hasCart={true}
    >
      <ARTICLE>
        <TITLE>Cart</TITLE>
        <LineItemGrid />
      </ARTICLE>
    </PageTemplate>
  )
}

export default CartPage;
