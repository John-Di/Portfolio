import React from "react";
import PageTemplate from '../../templates/page';
import ProductOptionSelector from "../../components/product-option-selector";
import {
  randomBool,
  randomColor,
} from '../../utils/randoms';
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import {
  useProduct,
  getSelectedOptions
} from '../../utils/Product';
import SwatchGrid from "../../components/swatch-grid";
import VariantSelector from "../../components/variant-selector";
import ImageGallery from "../../components/image-gallery";
import ProductForm from "../../components/product-form";
import {
  ARTICLE,
  TITLE,
  MEDIA,
  PRICE,
  PRICING,
  DESCRIPTION
} from './styles';

// markup
const ProductPage = ({ accentColor = randomColor(), selectedID, ...product }) => {
  let {
    title,
    price,
    images,
    description,
    options = [],
    variants = []
  } = product,
    selectedVariantId = selectedID || variants[0].id,
    selectedVariant = variants.find(v => v.id === selectedVariantId);

  const { formState, updateVariant, updateOption } = useProduct({ options, variants, selectedVariant });

  let selectedOptions = getSelectedOptions(options, formState.selectedVariant);

  return (
    <PageTemplate
      accentColor={accentColor}
      activeHeader={true}
    >
      <ARTICLE>
        <TITLE>{title}</TITLE>
        <MEDIA>
          <ImageGallery maxWidth={`75%`} images={formState.selectedVariant.images || images} gap={0} selectedFirst={randomBool()} />
        </MEDIA>
        <PRICING>
          <PRICE>{formState.selectedVariant.price || price}</PRICE>
        </PRICING>
        <DESCRIPTION>{formState.selectedVariant.description || description}</DESCRIPTION>
        <ProductForm>
          <VariantSelector
            options={options}
            variants={variants}
            isHidden={true}
            selected={formState.selectedVariant.id}
            updateVariant={updateVariant}
            theme={'fancy'}
          >
            {
              arrayToComponentSiblings(options, (option, i) => (
                <ProductOptionSelector key={i} name={option.name}>
                  <SwatchGrid {...option} selected={selectedOptions.find(o => o.name === option.name).value} updateOption={updateOption} />
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
