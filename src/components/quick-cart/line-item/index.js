import React, { useContext } from "react";
import {
  LINEITEM,
} from './styles';

export default function LineItem({
  item,
  children
}) {

  const {
    description,
    variant
  } = item;

  let {
    image,
    price,
    id,
    title,
    product
  } = variant;

  return (
    <LINEITEM>
      <p>{item.title} {item.variant.title}</p>
    </LINEITEM>
  );
}
