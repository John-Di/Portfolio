import React, { useContext } from "react";
import ObjectTile from '../object-tile';
import {
  PRICE,
  BODY,
  CTA_WRAPPER
} from './styles';
import FancyCTA from '../fancy-cta';
import ThemeContext from "../../contexts/ThemeContext";
import ProductContext from "../../contexts/ProductContext";

export default function LineItemTile({
  children
}) {

  const {
    description,
    variant
  } = useContext(ProductContext);

  let {
    image,
    price,
    id,
    title,
    product
  } = variant;
  console.log('image', image.src);

  return (
    <ObjectTile
      className="line-item-tile"
      heading={title}
      backgroundImage={image.src}
      value={price && <PRICE>{price}</PRICE>}
    >
      {children && (<BODY>{children}</BODY>)}
      <CTA_WRAPPER>
        <FancyCTA
        > Add to Cart</FancyCTA>
      </CTA_WRAPPER>
    </ObjectTile>
  );
}
