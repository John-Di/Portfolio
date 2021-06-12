import React, {
  useContext
} from "react";
import {
  randomBool
} from '../../utils/randoms';
import ImageGallery from "../../components/image-gallery";
import ProductForm from "../../components/product-form";
import ProductContext from "../../contexts/ProductContext";
import ProductFormContext from "../../contexts/ProductFormContext";
import {
  ARTICLE,
  TITLE,
  MEDIA,
  FORM,
  PRICE,
  PRICING,
  DESCRIPTION
} from './styles';
import ProductGalleryProvider from "../../providers/ProductGalleryProvider";

// markup
const ProductPage = () => {
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
      <FORM>
        <ProductForm />
      </FORM>
    </ARTICLE>
  )
}

export default ProductPage;
