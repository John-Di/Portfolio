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
import ProductContext from "../../contexts/ProductContext";

export default function ProductTile({
  heading,
  children,
  maxWidth

}) {
  const {
    addToCart,
    removeFromCart
  } = useContext(ProductFormContext), {
    openFlyout
  } = useContext(CartFlyoutContext), {
    emptyCart
  } = useContext(ShopContext), {
    title,
    images,
    description,
    options,
    variants,
    url
  } = useContext(ProductContext), {
    formState,
    updateOption
  } = useContext(ProductFormContext), {
    price,
    image
  } = variants[formState];

  console.log('images', images[0]);

  const onClick = async (e) => {
    await addToCart(e);
    openFlyout();
  }
  return (
    <ObjectTile
      className="product-tile"
      heading={title}
      image={images[0]}
      body={description}
      url={url}
      maxWidth={`${size.mobileS / 16}em`}
      value={price && <PRICE>{`$${parseFloat(price).toFixed(2)}`}</PRICE>}
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
