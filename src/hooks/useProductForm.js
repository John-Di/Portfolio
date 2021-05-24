import {
  useState
} from "react";

const isSameOption = (selectedOption, { name, value }) => selectedOption.name === name && selectedOption.value === value;

function useProductForm({ product, selectedVariant, shop } = {}) {
  const {
    addVariantToCart,
    removeLineItem,
    lineItems,
    getLineItem
  } = shop, {
    variants = []
  } = product;

  const [formState, UpdateFormState] = useState(selectedVariant);
  const {
    id,
    shopifyId,
    selectedOptions
  } = variants[formState];

  const getSelectedVariantID = ({ name, value }) => {
    const selectedOptionIndex = selectedOptions.findIndex((option => option.name === name));
    const selectedVariantObj = variants.reduce((currentIndex, variant, index) => {
      let isSelected = variant.selectedOptions.every((option, index) => {
        return selectedOptionIndex === index ?
          isSameOption(option, { name, value }) : isSameOption(option, selectedOptions[index])
      });
      return isSelected ? index : currentIndex;
    }, formState)

    return selectedVariantObj;
  }


  const updateVariant = id => UpdateFormState(id);
  const updateOption = selectedOption => UpdateFormState(getSelectedVariantID(selectedOption));
  const addToCart = (async e => {
    e.preventDefault();
    return addVariantToCart(formState, 1);
  });

  const removeFromCart = (async e => {
    e.preventDefault();
    removeLineItem(getLineItem(shopifyId).id);
  })

  const optionIsSelected = (option) => {
    const selectedOptionIndex = selectedOptions.findIndex((o => o.name === option.name));
    // console.log('optionIsSelected', selectedOptions);
    const { name, value } = selectedOptions[selectedOptionIndex];
    return option.name === name && option.value === value;
  }

  return {
    product,
    formState,
    optionIsSelected,
    updateVariant,
    updateOption,
    addToCart,
    removeFromCart
  };
}

export default useProductForm;