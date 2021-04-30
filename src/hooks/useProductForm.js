import {
  useReducer, useState
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


function useProductForm({ product, selectedVariant } = {}) {
  const {
    variants = []
  } = product, {
    id,
    shopifyId
  } = selectedVariant;

  const getSelectedVariantID = ({ name, value }, { selectedOptions }) => {
    console.log('getSelectedVariantID', { name, value }, variants, { name, value })
    const selectedOptionIndex = selectedOptions.findIndex((option => option.name === name));
    console.log('selectedOptionIndex', selectedOptionIndex)

    return variants.reduce((currentID, variant, index) => {
      let isSelected = variant.selectedOptions.every((option, index) => {
        return selectedOptionIndex === index ? isSameOption(option, { name, value }) : isSameOption(option, selectedOptions[index]);
      });
      console.log('isSelected', variant.selectedOptions.map(o => o.value), isSelected, isSelected ? variant.id : currentID);
      return isSelected ? variant.shopifyId : currentID;
    }, variants[0].shopifyId)
  }


  const [formState, UpdateFormState] = useState(shopifyId || id);

  const updateVariant = id => UpdateFormState(id);
  const updateOption = selectedOption => UpdateFormState(getSelectedVariantID(selectedOption, selectedVariant));

  console.log('useProduct', formState)
  return { product, formState, updateVariant, updateOption };
}

export default useProductForm;