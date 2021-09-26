import {
  useContext,
  useReducer,
  useState
} from "react";
import LocationContext from "../../contexts/LocationContext";
import ShopContext from "../../contexts/ShopContext";
import productFormReducer, { actionTypes } from './reducer';


function useProductForm({ product }) {
  const shop = useContext(ShopContext), {
    addVariantToCart,
    removeLineItem
  } = shop,
    location = useContext(LocationContext), {
      variants = []
    } = product,
    selectedVariantIndex = location.selectedVariantIndex || 0,
    selectedVariant = variants[selectedVariantIndex];

  const [formState, UpdateFormState] = useReducer(productFormReducer, {
    ...product,
    ...selectedVariant,
    selectedVariantIndex,
    value: selectedVariant.shopifyId
  }), {
    selectedOptions = variants[selectedVariantIndex].selectedOptions
  } = formState, {
    shopifyId
  } = variants[formState.selectedVariantIndex];

  const reducers = {
    updateVariant: shopifyId => UpdateFormState({
      type: actionTypes.id,
      shopifyId
    }),
    updateOption: selectedOption => UpdateFormState({
      type: actionTypes.option,
      selectedOption,
      variants,
      selectedOptions,
      selectedVariantIndex: formState.selectedVariantIndex
    })
  }
  // console.log('useProductForm.shopifyId', shopifyId);

  const addToCart = (async e => {
    e.preventDefault();
    // console.log('useProductForm.addToCart', shopifyId, variants[formState.selectedVariantIndex].shopifyId);
    return addVariantToCart(shopifyId, 1);
  }),
    removeFromCart = (async e => {
      e.preventDefault();
      removeLineItem(shopifyId);
    }),
    optionIsSelected = (option) => {
      const selectedOptionIndex = selectedOptions.findIndex((o => o.name === option.name));
      const { name, value } = selectedOptions[selectedOptionIndex];
      return option.name === name && option.value === value;
    }

  return {
    selectedOptions,
    ...formState,
    ...reducers,
    optionIsSelected,
    addToCart,
    removeFromCart
  };
}

export default useProductForm;