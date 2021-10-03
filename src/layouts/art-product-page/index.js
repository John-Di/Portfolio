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
import ProductFormContext from "../../contexts/ProductFormContext";
import useProductGallery from "../../providers/ProductGalleryProvider/useProductGallery";
import ProductGalleryProvider from "../../providers/ProductGalleryProvider";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// markup
const ArtProductPage = () => {
  const {
    title,
    description,
    ...galleryData
  } = useContext(ProductContext), {
    variants = []
  } = galleryData, {
    selectedVariantIndex = 0
  } = useContext(ProductFormContext),
    {
      gatsbyImages = [],
      ...productGallery
    } = useProductGallery(galleryData);

  console.log('ArtProductPage', clamp(selectedVariantIndex, -1, variants.length))

  let {
    price
  } = variants[clamp(selectedVariantIndex, -1, variants.length)];
  return (
    <ARTICLE>
      <MEDIA>
        <ProductGalleryProvider {...galleryData}>
          <ImageGallery
            selectedFirst={randomBool()}
            currentIndex={selectedVariantIndex}
          />
        </ProductGalleryProvider>
      </MEDIA>
      <TITLE>{title}</TITLE>
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
