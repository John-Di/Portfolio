import React, { useContext } from "react";
import ObjectTile from '../object-tile';
import {
  PRICE,
  BODY,
  CTA_WRAPPER
} from './styles';
import ChicCTA from '../chic-cta';
import SiteThemeContext from "../../contexts/SiteThemeContext";
import ProductContext from "../../contexts/ProductContext";

export default function LineItemTile({
  children
}) {

  const {
    variant
  } = useContext(ProductContext);

  let {
    image,
    price,
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
        <ChicCTA
        > Add to Cart</ChicCTA>
      </CTA_WRAPPER>
    </ObjectTile>
  );
}
