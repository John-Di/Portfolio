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
  } = variants.find(variant => variant.shopifyId === formState);
  return (
    <PageTemplate>
      <ARTICLE>
        <TITLE>{title}</TITLE>
        <MEDIA>
          <ImageGallery maxWidth={`75%`} images={variants.map(({ image }) => image.originalSrc).filter(RemoveDuplicates) || images} selectedFirst={randomBool()} />
        </MEDIA>
        <PRICING>
          <PRICE>${price}</PRICE>
        </PRICING>
        <DESCRIPTION>{description}</DESCRIPTION>
        <ProductForm>
          <VariantSelector
            isHidden={true}
            theme={'fancy'}
          >
            {
              arrayToComponentSiblings(options, (option, i) => (
                <ProductOptionSelector key={i} name={option.name}>
                  <SwatchGrid values={option.values} name={option.name} />
                </ProductOptionSelector>
              ))
            }
          </VariantSelector>
        </ProductForm>
      </ARTICLE>
    </PageTemplate>
  )
}

export default ProductPage;
