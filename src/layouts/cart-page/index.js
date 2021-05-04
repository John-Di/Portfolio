import React, { useContext } from "react";
import PageTemplate from '../../templates/page';
import LineItemGrid from '../../components/line-item-grid';
import {
  ARTICLE,
  TITLE,
} from './styles';
import LocationContext from "../../contexts/LocationContext";

// markup
const CartPage = () => {
  const {
    state
  } = useContext(LocationContext);
  return (
    <PageTemplate location={state}>
      <ARTICLE>
        <TITLE>Cart</TITLE>
        <LineItemGrid />
      </ARTICLE>
    </PageTemplate>
  )
}

export default CartPage;
