import React, { useContext } from "react";
import ObjectTile from '../object-tile';
import { size } from '../../utils/variables';
import {
  PRICE,
  BODY,
  CTA_WRAPPER
} from './styles';
import ChicCTA from '../../components/chic-cta';
import ShopContext from "../../contexts/ShopContext";
import CartFlyoutContext from "../../contexts/CartFlyoutContext";
import ProductFormContext from "../../contexts/ProductFormContext";

export default function ProductTile({
  heading,
  image,
  description,
  children,
  price,
  maxWidth,
  url
}) {
  const {
    addToCart,
    removeFromCart
  } = useContext(ProductFormContext), {
    openFlyout
  } = useContext(CartFlyoutContext), {
    emptyCart
  } = useContext(ShopContext);

  const onClick = async (e) => {
    await addToCart(e);
    openFlyout();
  }
  return (
    <ObjectTile
      className="product-tile"
      heading={heading}
      image={image}
      body={description}
      url={url}
      maxWidth={`${size.mobileS / 16}em`}
      value={price && <PRICE>{price}</PRICE>}
    >
      {children && (<BODY>{children}</BODY>)}
      <CTA_WRAPPER>
        <ChicCTA
          onClick={onClick}
        >Add to Cart</ChicCTA>
      </CTA_WRAPPER>
    </ObjectTile>
  );
}
