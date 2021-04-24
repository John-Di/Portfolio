import {
  useReducer
} from "react";

const actionTypes = {
  id: 'ID',
  option: 'OPTION'
}

// const getSelectedVariant = ({ name, value }, variants = [], { selectedOptions }) => {
//   return variants.filter(variant => {
//     variant.selectedOptions.every((option, index) => {
//       return (option.name === name && option.value === value)
//         || (option.name === selectedOptions[index].name && option.value === selectedOptions[index].value)
//     })
//     let selectedOptionIndex = variant.selectedOptions.findIndex(option => option.name === name);
//     const selectedOption = variant.selectedOptions[selectedOptionIndex];
//     return variant.selectedOptions.every((option, index) => (option.name === name && option.value === value)
//       || (selectedOption.name === name && selectedOption.value === value
//         && option.name === selectedOptions[index].name
//         && option.value === selectedOptions[index].value));
//   })[0].id
// }

const isSameOption = (selectedOption, { name, value }) => selectedOption.name === name && selectedOption.value === value;

const getSelectedVariant = (selectedOption, variants = [], { selectedOptions }) => {
  console.log('getSelectedVariant', selectedOption, variants, selectedOptions)
  return variants.reduce((currentID, variant, index) => {
    const selectedOptionIndex = selectedOptions.findIndex(({ name }) => name === selectedOption.name);
    let isSelected = variant.selectedOptions.every((option, index) => {
      return selectedOptionIndex === index ? isSameOption(option, selectedOption) : isSameOption(option, selectedOptions[index]);
    });
    console.log(isSelected ? variant : currentID);
    return isSelected ? variant.id : currentID;
  }, variants[0].id)
}

export const productReducer = (state, action) => {
  let { selectedVariant, selectedOption, variants = [] } = action;
  switch (action.type) {
    case actionTypes.id:
      return {
        id: selectedVariant.id
      };
    case actionTypes.option:
      return {
        id: getSelectedVariant(selectedOption, variants, selectedVariant)
      };
    default:
      return state
  }
}

function useProduct({ reducer = productReducer, product, selectedVariant } = {}) {
  const {
    variants = []
  } = product;

  const [formState, UpdateFormState] = useReducer(reducer, {
    id: selectedVariant.shopifyId
  });

  const updateVariant = selectedVariant => UpdateFormState({ type: 'ID', selectedVariant, variants });
  const updateOption = selectedOption => UpdateFormState({ type: 'OPTION', selectedVariant, selectedOption, variants });


  return { formState, updateVariant, updateOption };
}

export default useProduct;