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

// markup
const ProductPage = () => {
  const {
    title,
    description,
    ...galleryData
  } = useContext(ProductContext), {
    variants = []
  } = galleryData, {
    selectedVariantIndex = 0
  } = useContext(ProductFormContext), {
    price
  } = variants[selectedVariantIndex],
    {
      gatsbyImages = [],
      ...productGallery
    } = useProductGallery(galleryData);

  return (
    <ARTICLE>
      <TITLE>{title}</TITLE>
      <MEDIA>
        <ProductGalleryProvider {...galleryData}>
          <ImageGallery
            selectedFirst={randomBool()}
            currentIndex={selectedVariantIndex}
          />
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
