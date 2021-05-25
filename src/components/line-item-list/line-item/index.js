import React, { useContext } from "react";
import Thumbnail from './thumbnail';
import {
  TITLE,
  LINEITEM,
  THUMBNAIL,
  DETAILS,
  OPTIONS,
  QUANTITYSTEPPER
} from './styles';
import Options from "./options";
import QuantitySelector from "../../quantity-selector";
import ShopContext from "../../../contexts/ShopContext";

export default function LineItem({
  item,
}) {
  const {
    variant,
    id
  } = item, {
    image,
    selectedOptions
  } = variant;

  // console.log('item', item);
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
        <TITLE>
          {item.title} <span>${item.variant.price}</span>
        </TITLE>
        <OPTIONS>
          <Options options={selectedOptions} />
        </OPTIONS>
      </DETAILS>
      <QUANTITYSTEPPER>
        <QuantitySelector
          id={`quantity-stepper-${id}-${(new Date()).getTime()}`}
          value={item.quantity}
          increase={increase}
          decrease={decrease}
          onChange={onChange}
        />
      </QUANTITYSTEPPER>
    </LINEITEM>
  );
}
