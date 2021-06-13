import {
  useContext,
  useState
} from "react";
import ShopContext from "../contexts/ShopContext";

const isSameOption = (selectedOption, { name, value }) => selectedOption.name === name && selectedOption.value === value;

function useProductForm({
  product = {},
  staticOptions = [],
  hiddenOptions = [],
  selectedVariant = 0 }) {

  const shop = useContext(ShopContext), {
    addVariantToCart,
    removeLineItem
  } = shop, {
    handle,
    variants = []
  } = product;

  const [formState, UpdateFormState] = useState(selectedVariant);
  const {
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
    return addVariantToCart(shopifyId, 1);
  });

  const removeFromCart = (async e => {
    e.preventDefault();
    removeLineItem(shopifyId);
  })

  const optionIsSelected = (option) => {
    const selectedOptionIndex = selectedOptions.findIndex((o => o.name === option.name));
    const { name, value } = selectedOptions[selectedOptionIndex];
    return option.name === name && option.value === value;
  }

  return {
    product,
    shopifyId,
    formState,
    staticOptions,
    hiddenOptions,
    optionIsSelected,
    updateVariant,
    updateOption,
    addToCart,
    removeFromCart
  };
}

export default useProductForm;