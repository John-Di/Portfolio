import React, { useContext } from "react";
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import ObjectTile from '../object-tile';
import { size } from '../../utils/variables';
import {
  IMAGE,
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
  children
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
    url,
    variants
  } = useContext(ProductContext), {
    formState,
    updateOption
  } = useContext(ProductFormContext), {
    price,
    image
  } = variants[formState];


  const onClick = async (e) => {
    await addToCart(e);
    openFlyout();
  }
  return (
    <ObjectTile
      className="product-tile"
      heading={title}
      body={description}
      url={url}
      maxWidth={`${size.mobileS / 16}em`}
      value={price && <PRICE>{`$${parseFloat(price).toFixed(2)}`}</PRICE>}
    >
      <IMAGE
        to={url}
        activeClassName="active"
        partiallyActive={true}
        state={{
          product: { title }
        }}
      >
        {getImage(images[0]) && <GatsbyImage image={getImage(images[0])} alt={`alt`} />}
      </IMAGE>
      {children && (<BODY>{children}</BODY>)}
      <CTA_WRAPPER>
        <ChicCTA
          onClick={onClick}
        >Add to Cart</ChicCTA>
      </CTA_WRAPPER>
    </ObjectTile>
  );
}
