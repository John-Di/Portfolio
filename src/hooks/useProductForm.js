import {
  useState
} from "react";

const isSameOption = (selectedOption, { name, value }) => selectedOption.name === name && selectedOption.value === value;

function useProductForm({ product, selectedVariant, shop } = {}) {
  const {
    addVariantToCart,
    removeLineItem,
    lineItems
  } = shop, {
    variants = []
  } = product, {
    id,
    shopifyId
  } = selectedVariant;

  const getSelectedVariantID = ({ name, value }, { selectedOptions }) => {
    const selectedOptionIndex = selectedOptions.findIndex((option => option.name === name));

    return variants.reduce((currentID, variant, index) => {
      let isSelected = variant.selectedOptions.every((option, index) => selectedOptionIndex === index ?
        isSameOption(option, { name, value }) : isSameOption(option, selectedOptions[index]));
      return isSelected ? variant.shopifyId : currentID;
    }, variants[0].shopifyId)
  }

  const [formState, UpdateFormState] = useState(shopifyId || id);

  const updateVariant = id => UpdateFormState(id);
  const updateOption = selectedOption => UpdateFormState(getSelectedVariantID(selectedOption, selectedVariant));
  const addToCart = (async e => {
    e.preventDefault();
    return addVariantToCart(formState, 1);
  });

  const removeFromCart = (async e => {
    e.preventDefault();
    removeLineItem(lineItems.find(({ variant }) => variant.id === formState).id);
  })

  return {
    product,
    formState,
    updateVariant,
    updateOption,
    addToCart,
    removeFromCart
  };
}

export default useProductForm;