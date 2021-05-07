import React, { useContext } from "react";
import Thumbnail from './thumbnail';
import {
  LINEITEM,
  THUMBNAIL,
  DETAILS
} from './styles';
import Options from "./options";

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
    product,
    selectedOptions
  } = variant;

  return (
    <LINEITEM>
      <THUMBNAIL>
        <Thumbnail image={image.src} />
      </THUMBNAIL>
      <DETAILS>
        <p>{item.title} {item.variant.title}</p>
        <Options options={selectedOptions} />
      </DETAILS>
    </LINEITEM>
  );
}
