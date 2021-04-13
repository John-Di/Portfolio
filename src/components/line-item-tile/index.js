import React from "react";
import ObjectTile from '../object-tile';
import {
  PRICE,
  BODY,
  CTA_WRAPPER
} from './styles';
import FancyCTA from '../fancy-cta';

export default function LineItemTile({
  heading,
  backgroundImage,
  children,
  price
}) {
  return (
    <ObjectTile
      className="line-item-tile"
      heading={heading}
      backgroundImage={backgroundImage}
      body={`Description for the Line Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit,`}
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
