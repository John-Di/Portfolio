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
import ProductFormContext from "../../contexts/ProductFormContext";
import ProductContext from "../../contexts/ProductContext";
import ProductForm from "../product-form";
import LocationContext from "../../contexts/LocationContext";
import AdaptedImage from "../adapted-image";

export default function ProductTile({
  children
}) {
  const {
    state
  } = useContext(LocationContext), {
    title,
    options,
    url,
    variants,
    selectedVariantIndex
  } = useContext(ProductContext), {
    price,
    image
  } = variants[selectedVariantIndex];

  console.log('ProductTile', image, typeof image);

  const values = options.filter(({ name }) => name.toLowerCase() === 'color').map(({ values }) => values).flat();
  const locationState = {
    ...state,
    product: { title },
    selectedVariantIndex
  };

  const productImage = {
    image,
    url,
    locationState,
    alt: title
  };

  return (
    <ObjectTile
      className="product-tile"
      heading={title}
      url={url}
      state={locationState}
      value={price && <PRICE>{`$${parseFloat(price).toFixed(2)}`}</PRICE>}
    >
      <AdaptedImage {...productImage} />
      {children && <BODY>
        {children}
      </BODY>}
      <FORM>
        <ProductForm />
      </FORM>
    </ObjectTile>
  );
}
