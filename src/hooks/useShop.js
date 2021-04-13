import {
  useState,
  useEffect,
  useRef,
  useReducer
} from "react";
import Client from 'shopify-buy';

const client = Client.buildClient(
  {
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
    domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
  },
  fetch
)

function useShop() {
  let initialStoreState = {
    client,
    adding: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
  }

  const [store, updateStore] = useState(initialStoreState)
  const isRemoved = useRef(false)

  const setCheckoutInState = (isBrowser, checkout) => {
    if (isBrowser) {
      localStorage.setItem('shopify_checkout_id', checkout.id)
    }

    updateStore(prevState => {
      return { ...prevState, checkout }
    })
  }
  const UpdateCheckout = () => async () => {
    // Check for an existing cart.
    const isBrowser = typeof window !== 'undefined'
    const existingCheckoutID = isBrowser
      ? localStorage.getItem('shopify_checkout_id')
      : null

    const fetchCheckout = id => store.client.checkout.create()

    if (existingCheckoutID) {
      try {
        let c;
        await fetchCheckout(existingCheckoutID).then(checkout => {
          console.log('newCheckout', checkout);
          c = checkout;
        });

        // Make sure this cart hasn’t already been purchased.
        if (!isRemoved.current && !c.completedAt) {
          setCheckoutInState(isBrowser, c)
          return
        }
      } catch (e) {
        localStorage.setItem('shopify_checkout_id', null)
      }
    }
  }

  const InitCheckout = () => async () => {
    const isBrowser = typeof window !== 'undefined';

    try {
      let newCheckout;

      await store.client.checkout.create().then(checkout => {
        console.log('newCheckout', checkout);
        newCheckout = checkout;
      });

      if (!isRemoved.current) {
        setCheckoutInState(isBrowser, newCheckout)
      }
    } catch (e) {
      console.log('setCheckoutInState', e)
    }

    isRemoved.current = true
  }

  useEffect(UpdateCheckout, [store.client.checkout])
  useEffect(InitCheckout);

  const addVariantToCart = async (variantId, quantity) => {
    if (variantId === '' || !quantity) {
      console.error('Both a size and quantity are required.')
      return
    }

    updateStore(prevState => {
      return { ...prevState, adding: true }
    })

    const { checkout, client } = store

    const checkoutId = checkout.id || 1
    const lineItemsToUpdate = [
      { variantId, quantity: parseInt(quantity, 10) },
    ]

    console.log('lineItemsToUpdate.checkout', checkout);

    console.log('lineItemsToUpdate.checkoutId', checkoutId,
    );

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

  return { store, addVariantToCart, removeLineItem, updateLineItem };
}

export default useShop;