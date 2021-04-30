import React, {
  useCallback,
  useContext
} from "react";
import { size } from '../../utils/variables';
import FancyCTA from '../../components/fancy-cta';
import ShopContext from '../../contexts/ShopContext';
import ProductFormContext from "../../contexts/ProductFormContext";
import {
  FORM,
  CTA
} from './styles';

// markup
const ProductForm = ({
  children
}) => {
  const {
    formState
  } = useContext(ProductFormContext), {
    addVariantToCart,
    clearCart,
    store,
    removeLineItem
  } = useContext(ShopContext);
  const addToCart = (async e => {
    e.preventDefault();
    return addVariantToCart(formState, 1);
  });

  const emptyCart = (async e => {
    e.preventDefault();
    return clearCart();
  });

  const removeFromCart = async e => {
    e.preventDefault();
    return clearCart(store.checkout.lineItems.find(item => item.variant.id === formState).id);
  }
  return (
    <FORM>
      {children}
      <CTA>
        <FancyCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
          onClick={addToCart}
        >Add to Cart</FancyCTA>
      </CTA>
      <CTA>
        <FancyCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
          onClick={removeFromCart}
        >Remove Cart</FancyCTA>
      </CTA>
      <CTA>
        <FancyCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
          onClick={emptyCart}
        >Clear Cart</FancyCTA>
      </CTA>
    </FORM>
  )
}

export default ProductForm;
