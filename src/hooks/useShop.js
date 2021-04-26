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

const initialStoreState = {
  client,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
};

function useShop() {

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

        updateStore(prevState => ({ ...prevState, checkout }))
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

  useEffect(InitCheckout, [store.client.checkout]);
  useEffect(RefreshCheckout);

  const { checkout, client } = store,
    { id } = checkout;

  const addVariantToCart = async (variantId, quantity) => {
    if (variantId === '' || !quantity) {
      console.error('Both a size and quantity are required.')
      return
    }

    updateStore(prevState => ({ ...prevState, adding: true }))

    const lineItemsToUpdate = [
      { variantId, quantity: parseInt(quantity, 10) },
    ];

    return client.checkout
      .addLineItems(id, lineItemsToUpdate)
      .then(checkout => {
        updateStore(prevState => {
          return { ...prevState, checkout, adding: false }
        })
      })
  }, removeLineItem = (lineItemID) => {
    return store.client.checkout
      .removeLineItems(id, [lineItemID])
      .then(res => {
        updateStore(prevState => {
          return { ...prevState, checkout: res }
        })
      })
  }, updateLineItem = (lineItemID, quantity) => {
    const lineItemsToUpdate = [
      { id: lineItemID, quantity: parseInt(quantity, 10) },
    ]

    return client.checkout
      .updateLineItems(id, lineItemsToUpdate)
      .then(res => {
        updateStore(prevState => {
          return { ...prevState, checkout: res }
        })
      })
  }, clearCart = () => {
    return client.checkout.removeLineItems(id, store.checkout.lineItems.map(({ id }) => id))
      .then(res => {
        updateStore(prevState => {
          return { ...prevState, checkout: res }
        })
      })
  };

  console.log('store.checkout.lineItems', store.checkout.lineItems)
  console.log('store.checkout.webUrl', store.checkout.webUrl)

  return { store, addVariantToCart, removeLineItem, updateLineItem, clearCart, checkoutURL: store.checkout.webUrl };
}

export default useShop;