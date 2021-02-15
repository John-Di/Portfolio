import React, { Children } from "react";
import ObjectTile from '../object-tile';
import {
  PRICE,
  BODY,
  CTA_WRAPPER
} from './styles';
import FancyCTA from '../../components/fancy-cta';
import IdealTextColor from '../../utils/IdealTextColor';

export default function ProductTile({
  heading,
  subheading,
  image,
  body,
  backgroundImage,
  accentColor,
  children,
  price
}) {
  return (
    <ObjectTile
      className="product-tile"
      heading={heading}
      backgroundImage={backgroundImage}
      body={`Description for the Product. Lorem ipsum dolor sit amet, consectetur adipiscing elit,`}
      value={price && <PRICE>{price}</PRICE>}
    >
      {children && (<BODY>{children}</BODY>)}
      <CTA_WRAPPER>
        <FancyCTA
        >Add to Cart</FancyCTA>
      </CTA_WRAPPER>
    </ObjectTile>
  );
}
