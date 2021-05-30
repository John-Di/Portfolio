import React, {
  useContext
} from "react";
import PageTemplate from '../../templates/page';
import ProductOptionSelector from "../../components/product-option-selector";
import {
  randomBool,
  randomColor,
} from '../../utils/randoms';
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import SwatchGrid from "../../components/swatch-grid";
import VariantSelector from "../../components/variant-selector";
import ImageGallery from "../../components/image-gallery";
import ProductForm from "../../components/product-form";
import ProductContext from "../../contexts/ProductContext";
import ProductFormContext from "../../contexts/ProductFormContext";
import {
  ARTICLE,
  TITLE,
  MEDIA,
  PRICE,
  PRICING,
  DESCRIPTION
} from './styles';
import RemoveDuplicates from "../../utils/RemoveDuplicates";
import ProductGalleryProvider from "../../providers/ProductGalleryProvider";
import Page from "../page";

// markup
const ProductPage = ({ location = {} }) => {
  const {
    title,
    images,
    description,
    options = [],
    variants = []
  } = useContext(ProductContext), {
    formState,
    updateOption
  } = useContext(ProductFormContext);

  let {
    price,
    selectedOptions
  } = variants[formState];
  return (
    <ARTICLE>
      <TITLE>{title}</TITLE>
      <MEDIA>
        <ProductGalleryProvider>
          <ImageGallery maxWidth={`75%`} selectedFirst={randomBool()} />
        </ProductGalleryProvider>
      </MEDIA>
      <PRICING>
        <PRICE>${price}</PRICE>
      </PRICING>
      <DESCRIPTION>{description}</DESCRIPTION>
      <ProductForm />
    </ARTICLE>
  )
}

export default ProductPage;
