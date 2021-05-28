import React, { useContext } from "react";
import {
  ITEMS,
  ITEM
} from './styles';
import ShopContext from "../../contexts/ShopContext";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import CartFlyoutContext from "../../contexts/CartFlyoutContext";
import LineItem from "./line-item";

export default function LineItemList() {
  const {
    lineItems
  } = useContext(ShopContext);

  return (
    <ITEMS>
      {arrayToComponentSiblings(lineItems, (item, i) => {
        return (
          <ITEM>
            <LineItem item={item} />
          </ITEM>
        )
      })}
    </ITEMS>
  );
}
