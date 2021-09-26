import React, {
  useContext
} from "react";
import {
  randomBool
} from '../../utils/randoms';
import ImageGallery from "../../components/image-gallery";
import ProductForm from "../../components/product-form";
import ProductContext from "../../contexts/ProductContext";
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
const ArtProductPage = () => {
  const {
    title,
    description,
    selectedVariant
  } = useContext(ProductContext);

  let {
    price
  } = selectedVariant;
  return (
    <ARTICLE>
      <TITLE>{title}</TITLE>
      <MEDIA>
        <ImageGallery maxWidth={`75%`} selectedFirst={randomBool()} />
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

export default ArtProductPage;
