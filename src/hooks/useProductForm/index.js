import {
  useContext,
  useReducer,
  useState
} from "react";
import LocationContext from "../../contexts/LocationContext";
import ShopContext from "../../contexts/ShopContext";
import useProduct from "../useProduct";
import productFormReducer, { actionTypes } from './reducer';


function useProductForm({ product = { selectedVariantIndex: 0 } }) {
  const shop = useContext(ShopContext), {
    addVariantToCart,
    removeLineItem
  } = shop,
    location = useContext(LocationContext), {
      variants = []
    } = product,
    selectedVariant = variants[location.selectedVariantIndex || 0];

  const [formState, UpdateFormState] = useReducer(productFormReducer, {
    ...useProduct({
      product,
      ...location
    }),
    ...selectedVariant,
    selectedVariantIndex: location.selectedVariantIndex || 0,
    value: selectedVariant.shopifyId
  }), {
    selectedVariantIndex,
    selectedOptions = variants[selectedVariantIndex].selectedOptions
  } = formState, {
    shopifyId
  } = variants[selectedVariantIndex];

  const updateVariant = shopifyId => UpdateFormState({
    type: actionTypes.id,
    shopifyId
  }),
    updateOption = selectedOption => UpdateFormState({
      type: actionTypes.option,
      selectedOption,
      variants,
      selectedOptions,
      selectedVariantIndex
    });

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
    product,
    selectedOptions,
    ...formState,
    optionIsSelected,
    updateVariant,
    updateOption,
    addToCart,
    removeFromCart
  };
}

export default useProductForm;