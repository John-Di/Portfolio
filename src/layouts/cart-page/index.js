import React, { useContext } from "react";
import Page from '../../layouts/page';
import {
  ARTICLE,
  TITLE,
  LINEITEMS,
  SUMMARY,
  ACTIONS,
  CHECKOUT
} from './styles';
import LineItemList from "../../components/line-item-list";
import ShopContext from "../../contexts/ShopContext";
import { arrayToComponentSiblings } from "../../utils/dom-builder";

// markup
const CartPage = () => {

  const {
    store,
    checkoutURL
  } = useContext(ShopContext), {
    subtotalPrice,
    discountApplications = []
  } = store.checkout;
  return (
    <ARTICLE>
      <TITLE>Cart</TITLE>
      <LINEITEMS>
        <LineItemList />
      </LINEITEMS>
      <SUMMARY>
        <section>
          <table>
            <caption>Summary</caption>
            <tbody>
              {
                !!discountApplications.length && (
                  <tr>
                    <th scope="row">Discounts</th>
                    <td>
                      <ul>
                        {
                          arrayToComponentSiblings(discountApplications, (d, i) => (
                            <li key={i}>{d}</li>
                          ))
                        }
                      </ul>
                    </td>
                  </tr>
                )
              }
              <tr>
                <th scope="row">Subtotal</th>
                <td>
                  <p>${subtotalPrice}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <ACTIONS>
            {checkoutURL &&
              <CHECKOUT href={checkoutURL} target="_blank">Test Checkout</CHECKOUT>
            }
          </ACTIONS>
        </section>
      </SUMMARY>
    </ARTICLE>
  )
}

export default CartPage;