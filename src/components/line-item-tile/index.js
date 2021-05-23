import React, { useContext } from "react";
import ObjectTile from '../object-tile';
import {
  PRICE,
  BODY,
  CTA_WRAPPER
} from './styles';
import FancyCTA from '../fancy-cta';
import SiteThemeContext from "../../contexts/SiteThemeContext";
import ProductContext from "../../contexts/ProductContext";

export default function LineItemTile({
  children
}) {

  const {
    description,
    variant,
    handle
  } = useContext(ProductContext);

  let {
    image,
    price,
    id,
    title,
    product
  } = variant;

  return (
    <ObjectTile
      className="line-item-tile"
      heading={title}
      backgroundImage={image.src}
      url={`/products/${product.handle}`}
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
