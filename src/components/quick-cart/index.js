import React, { useContext } from "react";
import {
  QUICKCART,
  ITEMS,
  HEADER,
  H1,
  ITEM,
  FOOTER,
  TOTALS,
  CART,
  CHECKOUT
} from './styles';
import ShopContext from "../../contexts/ShopContext";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import CartFlyoutContext from "../../contexts/CartFlyoutContext";
import LineItem from "./line-item";

export default function QuickCart({
  innerPadding = false
}) {
  const {
    store,
    lineItems,
    checkoutURL
  } = useContext(ShopContext), {
    ref,
    isOpen,
    footerHeight
  } = useContext(CartFlyoutContext), {
    subtotalPrice
  } = store.checkout;

  return (
    <QUICKCART
      isOpen={isOpen}
      innerPadding={innerPadding}
    >
      <HEADER>
        <H1>Cart</H1>

      </HEADER>
      <ITEMS footerHeight={footerHeight}>
        {arrayToComponentSiblings(lineItems, (item, i) => {
          return (
            <ITEM>
              <LineItem item={item} />
            </ITEM>
          )
        })}
      </ITEMS>
      <FOOTER ref={ref} footerHeight={footerHeight}>
        <TOTALS>
          <dt>Subtotal</dt>
          <dd>{`$${subtotalPrice}`}</dd>
        </TOTALS>
        <CART href={`/cart/`}>Go to Cart</CART>
        {/* <CHECKOUT href={checkoutURL} target="_blank">Checkout</CHECKOUT> */}
      </FOOTER>
    </QUICKCART>
  );
}
