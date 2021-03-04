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


const reducer = (variant, action) => {
  return variant
}

// markup
const ProductPage = ({
  title,
  price,
  images,
  description,
  options = [],
  variants = [],
  selectedID
}) => {
  console.log('ProductPage',
    {
      title,
      price,
      images,
      description,
      options,
      variants,
      selectedID
    });
  let selectedVariantId = selectedID || variants[0].id;
  let selectedVaraint = variants.find(v => v.id === selectedVariantId);
  const [currentVariant, UpdateCurrentVariant] = useReducer(reducer, selectedVaraint);

  let accentColor = randomColor();

  return (
    <PageTemplate
      accentColor={accentColor}
      activeHeader={true}
    >
      <ARTICLE>
        <TITLE>{currentVariant.title || title}</TITLE>
        <MEDIA>
          <ImageGallery maxWidth={`75%`} images={currentVariant.images || images} gap={0} />
        </MEDIA>
        <PRICING>
          <PRICE>{currentVariant.price || price}</PRICE>
        </PRICING>
        <DESCRIPTION>{currentVariant.description || description}</DESCRIPTION>
        <ProductForm>
          <VariantSelector
            options={options}
            variants={variants}
            isHidden={false}
            selected={selectedVariantId}
            updateVariant={UpdateCurrentVariant}
          >
            {
              arrayToComponentSiblings(options, (option, i) => (
                <ProductOptionSelector key={i} name={option.name}>
                  <SwatchGrid {...option} />
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
