import React, { useContext } from "react";
import {
  QUICKCART,
  GALLERY,
  MAIN_IMAGE,
  IMG
} from './styles';
import ShopContext from "../../contexts/ShopContext";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import CartFlyoutContext from "../../contexts/CartFlyoutContext";

export default function QuickCart() {
  const {
    lineItems,
  } = useContext(ShopContext), {
    isOpen
  } = useContext(CartFlyoutContext);

  return (
    <QUICKCART
      isOpen={isOpen}
    >
      <ul>
        {arrayToComponentSiblings(lineItems, (item, i) => {
          return (
            <li>
              <div>
                <p>{item.title} {item.variant.title}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </QUICKCART>
  );
}
