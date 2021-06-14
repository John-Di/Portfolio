import React, { useContext } from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ObjectTile from '../object-tile';
import { size } from '../../utils/variables';
import {
  IMAGE,
  PRICE,
  BODY,
  FORM
} from './styles';
import ShopContext from "../../contexts/ShopContext";
import CartFlyoutContext from "../../contexts/CartFlyoutContext";
import ProductFormContext from "../../contexts/ProductFormContext";
import ProductContext from "../../contexts/ProductContext";
import ProductForm from "../product-form";
import LocationContext from "../../contexts/LocationContext";

export default function ProductTile({
  children
}) {
  const {
    state
  } = useContext(LocationContext), {
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

  const values = options.filter(({ name }) => name.toLowerCase() === 'color').map(({ values }) => values).flat();
  const locationState = {
    ...state,
    product: { title },
    selectedVariant: formState
  };

  return (
    <ObjectTile
      className="product-tile"
      heading={title}
      body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}
      url={url}
      state={locationState}
      maxWidth={`${size.mobileS / 16}em`}
      value={price && <PRICE>{`$${parseFloat(price).toFixed(2)}`}</PRICE>}
    >
      <IMAGE
        to={url}
        activeClassName="active"
        partiallyActive={true}
        state={locationState}
      >
        {getImage(image) && <GatsbyImage image={getImage(image)} alt={`alt`} />}
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
