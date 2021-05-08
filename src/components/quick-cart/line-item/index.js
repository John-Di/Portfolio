import React, { useContext } from "react";
import Thumbnail from './thumbnail';
import {
  TITLE,
  LINEITEM,
  THUMBNAIL,
  DETAILS,
  CONTAINER,
  QUANTITYSTEPPER
} from './styles';
import Options from "./options";
import QuantitySelector from "../../quantity-selector";
import ShopContext from "../../../contexts/ShopContext";

export default function LineItem({
  item
}) {
  const {
    variant,
    id
  } = item, {
    image,
    selectedOptions
  } = variant;

  console.log('item', item);
  const {
    updateLineItem,
    removeFromCart
  } = useContext(ShopContext),
    increase = async e => {
      e.preventDefault();
      e.target.value = item.quantity + 1;
      await updateLineItem(id, item.quantity + 1);
    },
    decrease = async e => {
      e.preventDefault();
      if (item.quantity <= 0) {
        return;
      }
      e.target.value = item.quantity - 1;
      await updateLineItem(id, item.quantity - 1);
    },
    onChange = async e => {
      e.preventDefault();

      if (item.quantity <= 0) {
        return;
      }

      await updateLineItem(id, Math.max(0, e.target.value));
    }

  return (
    <LINEITEM>
      <THUMBNAIL>
        <Thumbnail image={image.src} />
      </THUMBNAIL>
      <DETAILS>
        <CONTAINER>
          <TITLE>{item.title}<br /><span style={{
            "font-weight": "normal",
            "font-size": "0.875em",
            "text-transform": "lowercase",
            "margin-top": "0.5em"
          }}>{item.variant.title}</span></TITLE>
          <Options options={selectedOptions} />
          <QUANTITYSTEPPER>
            <QuantitySelector
              id={`quantity-stepper-${id}`}
              value={item.quantity}
              increase={increase}
              decrease={decrease}
              onChange={onChange}
            />
          </QUANTITYSTEPPER>
        </CONTAINER>
      </DETAILS>
    </LINEITEM>
  );
}
