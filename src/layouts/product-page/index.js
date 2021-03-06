import React, {
  useReducer
} from "react";
import PageTemplate from '../../templates/page';
import ProductOptionSelector from "../../components/product-option-selector";
import {
  randomColor,
} from '../../utils/randoms';
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import {
  productReducer,
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
const ProductPage = ({ accentColor = randomColor(), ...product }) => {
  let {
    title,
    price,
    images,
    description,
    options = [],
    variants = [],
    selectedID
  } = product;

  let selectedVariantId = selectedID || variants[0].id;
  let selectedVariant = variants.find(v => v.id === selectedVariantId);

  const [formState, UpdateFormState] = useReducer(productReducer.bind(this, options, variants), {
    selectedVariant
  });

  let selectedOptions = getSelectedOptions(options, formState.selectedVariant);

  return (
    <PageTemplate
      accentColor={accentColor}
      activeHeader={true}
    >
      <ARTICLE>
        <TITLE>{formState.selectedVariant.title || title}</TITLE>
        <MEDIA>
          <ImageGallery maxWidth={`75%`} images={formState.selectedVariant.images || images} gap={0} />
        </MEDIA>
        <PRICING>
          <PRICE>{formState.selectedVariant.price || price}</PRICE>
        </PRICING>
        <DESCRIPTION>{formState.selectedVariant.description || description}</DESCRIPTION>
        <ProductForm>
          <VariantSelector
            options={options}
            variants={variants}
            isHidden={false}
            selected={formState.selectedVariant.id}
            updateVariant={UpdateFormState}
          >
            {
              arrayToComponentSiblings(options, (option, i) => (
                <ProductOptionSelector key={i} name={option.name}>
                  <SwatchGrid {...option} selected={selectedOptions.find(o => o.name === option.name).value} updateOption={UpdateFormState} />
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
