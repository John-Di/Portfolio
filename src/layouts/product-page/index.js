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

  const reducer = (state = selectedVariant, action) => {
    console.log('reducer', '------------------')
    switch (action.type) {
      case 'id': {
        return {
          selectedVariant: action.selected,
          selectedOptions: action.selected.options.map((option, i) => ({
            name: options[i].name,
            value: option
          }))
        }
      }
      case 'option': {
        console.log('reducer', 'option', action)
        let selectedOptions = state.selectedOptions.reduce((acc, option, i) => {
          console.log(acc, option, i)
          if (option.name === action.selected.name) {
            acc.push(action.selected);
          } else {
            acc.push(option)
          }
          return acc;
        }, []);

        let selectedOptionValues = selectedOptions.map(o => o.value);
        let selectedVariant = variants.find((variant, i) => {
          let { options } = variant;
          let optionValues = options.map(o => o.value);
          return optionValues[0] === selectedOptionValues[0] &&
            optionValues[1] === selectedOptionValues[1] &&
            optionValues[2] === selectedOptionValues[2]
        });
        return {
          selectedVariant,
          selectedOptions
        }
      }
      default: {
        return state
      }
    }
  }

  const [formState, UpdateFormState] = useReducer(reducer, {
    selectedVariant,
    selectedOptions: selectedVariant.options.map((option, i) => ({
      name: options[i].name,
      value: option.value
    }))
  });
  console.log('Form State', formState.selectedVariant.id, formState)



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
                  <SwatchGrid {...option} selected={formState.selectedOptions.find(o => o.name === option.name).value} updateOption={UpdateFormState} />
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
