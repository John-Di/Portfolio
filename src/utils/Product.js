import React, {
  useReducer
} from "react";

import ProductContext from '../contexts/ProductContext';

const actionTypes = {
  id: 'ID',
  option: 'OPTION'
}

export const getSelectedOptions = (options, selectedVariant) => selectedVariant.options.map((option, i) => ({
  name: options[i].name,
  values: option.values
}))

export const productReducer = (state, action) => {
  let { selectedVariant, selectedOption, variants } = action;
  switch (action.type) {
    case actionTypes.id: {
      return {
        selectedVariant: {
          ...selectedVariant,
        }
      }
    }
    case actionTypes.option: {
      let { name, value } = selectedOption;
      let nextSelectedVariant = variants.filter(variant => {

        variant.selectedOptions.every((option, index) => {
          return (option.name === name && option.value === value)
            || (option.name === selectedVariant.selectedOptions[index].name && option.value === selectedVariant.selectedOptions[index].value)
        })
        let selectedOptionIndex = variant.selectedOptions.findIndex(option => option.name === name);
        return variant.selectedOptions.every((option, index) => (option.name === name && option.value === value)
          || (variant.selectedOptions[selectedOptionIndex].name === name
            && variant.selectedOptions[selectedOptionIndex].value === value
            && option.name === selectedVariant.selectedOptions[index].name
            && option.value === selectedVariant.selectedOptions[index].value));
      })

      return {
        selectedVariant: nextSelectedVariant,
        options: nextSelectedVariant.selectedOptions
      }
    }
    default: {
      return state
    }
  }
}

function useProduct({ reducer = productReducer, product, selectedVariantId } = {}) {
  const {
    variants = []
  } = product;

  let selectedId = selectedVariantId || variants[0].id;
  let selectedVariant = variants.find(v => v.id === selectedId);

  const [selectedVariantIndex, UpdateSelectedVariantIndex] = useReducer(reducer, {
    selectedVariant
  });

  const updateVariant = selectedVariant => UpdateSelectedVariantIndex({ type: 'ID', selectedVariant, variants });
  const updateOption = selectedOption => UpdateSelectedVariantIndex({ type: 'OPTION', selectedVariant, selectedOption, variants });

  return { ProductContext: ProductContext(product), selectedVariantIndex, updateVariant, updateOption };
}

export { useProduct }