import React, { useContext } from "react";
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import ObjectTile from '../object-tile';
import { size } from '../../utils/variables';
import Options from "./options";
import {
  IMAGE,
  PRICE,
  BODY,
  FORM,
  OPTIONS,
  CTA_WRAPPER
} from './styles';
import ChicCTA from '../../components/chic-cta';
import ShopContext from "../../contexts/ShopContext";
import CartFlyoutContext from "../../contexts/CartFlyoutContext";
import ProductFormContext from "../../contexts/ProductFormContext";
import ProductContext from "../../contexts/ProductContext";
import SwatchGrid from "../swatch-grid";
import ProductForm from "../product-form";

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
    selectedOptions
  } = variants[formState];

  const values = options.filter(({ name }) => name.toLowerCase() === 'color').map(({ values }) => values).flat();
  console.log('ProductTile', values)

  const onClick = async (e) => {
    await addToCart(e);
    openFlyout();
  }
  return (
    <ObjectTile
      className="product-tile"
      heading={title}
      body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}
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
      <BODY>
        {children}
      </BODY>
      <FORM>
        <ProductForm />
      </FORM>
    </ObjectTile>
  );
}
