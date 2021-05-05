import React, { useContext } from "react";
import {
  QUICKCART,
  ITEMS,
  H1,
  ITEM
} from './styles';
import ShopContext from "../../contexts/ShopContext";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import CartFlyoutContext from "../../contexts/CartFlyoutContext";
import LineItem from "./line-item";

export default function QuickCart({
  innerPadding = false
}) {
  const {
    lineItems,
  } = useContext(ShopContext), {
    isOpen
  } = useContext(CartFlyoutContext);

  return (
    <QUICKCART
      isOpen={isOpen}
      innerPadding={innerPadding}
    >
      <H1>Cart</H1>
      <ITEMS>
        {arrayToComponentSiblings(lineItems, (item, i) => {
          return (
            <ITEM>
              <LineItem item={item} />
            </ITEM>
          )
        })}
      </ITEMS>
    </QUICKCART>
  );
}
