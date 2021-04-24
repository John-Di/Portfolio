import {
  useState,
  useEffect,
  useRef,
  useReducer
} from "react";
import Client from 'shopify-buy';
import * as fetch from 'isomorphic-fetch';

const client = Client.buildClient(
  {
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN,
    domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
  },
  fetch
);
function useShop() {

  const initialStoreState = {
    client,
    adding: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
  };

  const [store, updateStore] = useState(initialStoreState)
  const isRemoved = useRef(false);

  const InitCheckout = () => {
    const initializeCheckout = async () => {
      // Check for an existing cart.
      const isBrowser = typeof window !== 'undefined'
      const existingCheckoutID = isBrowser
        ? localStorage.getItem('shopify_checkout_id')
        : null

      const setCheckoutInState = checkout => {
        if (isBrowser) {
          localStorage.setItem('shopify_checkout_id', checkout.id)
        }

        updateStore(prevState => {
          return { ...prevState, checkout }
        })
      }

      const createNewCheckout = () => store.client.checkout.create()
      const fetchCheckout = id => store.client.checkout.fetch(id)

      if (existingCheckoutID) {
        try {
          const checkout = await fetchCheckout(existingCheckoutID)
          // Make sure this cart hasn’t already been purchased.
          if (!isRemoved.current && !checkout.completedAt) {
            setCheckoutInState(checkout)
            return
          }
        } catch (e) {
          localStorage.setItem('shopify_checkout_id', null)
        }
      }

      const newCheckout = await createNewCheckout()
      if (!isRemoved.current) {
        setCheckoutInState(newCheckout)
      }
    }

    initializeCheckout()
  };

  const RefreshCheckout = () => () => {
    isRemoved.current = true
  };

  useEffect(InitCheckout, [store.client.checkout])

  useEffect(RefreshCheckout);

  const addVariantToCart = async (variantId, quantity) => {
    if (variantId === '' || !quantity) {
      console.error('Both a size and quantity are required.')
      return
    }

    updateStore(prevState => {
      return { ...prevState, adding: true }
    })

    const { checkout, client } = store;

    const checkoutId = checkout.id || 1
    const lineItemsToUpdate = [
      { variantId, quantity: parseInt(quantity, 10) },
    ];

    return client.checkout
      .addLineItems(checkoutId, lineItemsToUpdate)
      .then(checkout => {
        updateStore(prevState => {
          return { ...prevState, checkout, adding: false }
        })
      })
  }, removeLineItem = (client, checkoutID, lineItemID) => {
    return client.checkout
      .removeLineItems(checkoutID, [lineItemID])
      .then(res => {
        updateStore(prevState => {
          return { ...prevState, checkout: res }
        })
      })
  }, updateLineItem = (client, checkoutID, lineItemID, quantity) => {
    const lineItemsToUpdate = [
      { id: lineItemID, quantity: parseInt(quantity, 10) },
    ]

    return client.checkout
      .updateLineItems(checkoutID, lineItemsToUpdate)
      .then(res => {
        updateStore(prevState => {
          return { ...prevState, checkout: res }
        })
      })
  };

  console.log("useShop", store)

  console.log('Items', store.checkout.lineItems.map(i => ({
    title: i.title,
    qty: i.quantity
  })));

  return { store, addVariantToCart, removeLineItem, updateLineItem };
}

export default useShop;