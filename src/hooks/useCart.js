import {
  useState,
  useRef,
  useReducer,
  useEffect,
  useContext
} from "react";


import ShopProvider from "../providers/ShopProvider";
const actionTypes = {
  add: 'ADD',
  remove: 'REMOVE',
  change: 'CHANGE',
  udpate: 'UPDATE'
}

// console.log(
//   {
//     storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
//     domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`
//   });

export const scrollReducer = (state, action) => {
  // let { type = '', items = [] } = action;
  // let { add, remove, update, change } = actionTypes;

  // switch (type) {
  //   case add: return addToCart(items);
  //   case remove: return removeFromCart(items);
  //   case update: return updateCart(items);
  //   case change: return updateCart(items);
  // }

  return state;
}
function useCart({ reducer = scrollReducer, ref, index = 0 } = {}) {

  const [cartState, updateCartState] = useReducer(reducer, { index });

  const CartController = () => {
    if (!ref) {
      return;
    }
  };

  const addToCart = items => {
    updateCartState({ type: 'add', items })
  }

  const removeFromCart = items => {
    updateCartState({ type: 'remove', items })
  }

  const updateItem = updates => {
    updateCartState({ type: 'update', updates })
  }

  const changeItem = updates => {
    updateCartState({ type: 'change', updates })
  }


  // useEffect(ShopProvider, [cartState]);

  return {
    cartState,
    addToCart,
    removeFromCart,
    updateItem,
    changeItem,
    ShopProvider
  };
}

export default useCart;