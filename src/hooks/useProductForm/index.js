import {
  useContext,
  useReducer,
  useState
} from "react";
import LocationContext from "../../contexts/LocationContext";
import ShopContext from "../../contexts/ShopContext";
import useProduct from "../useProduct";
import productFormReducer, { actionTypes } from './productFormReducer';


function useProductForm({ product = { selectedVariantIndex: 0 } }) {
  const shop = useContext(ShopContext), {
    addVariantToCart,
    removeLineItem
  } = shop,
    location = useContext(LocationContext), {
      variants = []
    } = product;

  const [formState, UpdateFormState] = useReducer(productFormReducer, {
    value: shopifyId,
    ...useProduct({
      product,
      ...location
    }),
    ...variants[selectedVariantIndex || 0],
    selectedVariantIndex
  }), {
    shopifyId,
    selectedVariantIndex,
    selectedVariant,
    selectedOptions = variants[selectedVariantIndex].selectedOptions
  } = formState;

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

  const addToCart = (async e => {
    e.preventDefault();
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
    product: {
      ...product,
      selectedOptions,
      selectedVariantIndex
    },
    shopifyId,
    ...formState,
    optionIsSelected,
    updateVariant,
    updateOption,
    addToCart,
    removeFromCart
  };
}

export default useProductForm;