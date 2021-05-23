import React, {
  useCallback,
  useContext
} from "react";
import { size } from '../../utils/variables';
import ChicCTA from '../../components/chic-cta';
import ShopContext from '../../contexts/ShopContext';
import ProductFormContext from "../../contexts/ProductFormContext";
import {
  FORM,
  CTA
} from './styles';
import CartFlyoutContext from "../../contexts/CartFlyoutContext";

// markup
const ProductForm = ({
  children
}) => {
  const {
    addToCart,
    removeFromCart
  } = useContext(ProductFormContext), {
    openFlyout
  } = useContext(CartFlyoutContext), {
    emptyCart
  } = useContext(ShopContext);

  const onClick = async (e) => {
    await addToCart(e);
    openFlyout();
  }

  return (
    <FORM>
      {children}
      <CTA>
        <ChicCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
          onClick={onClick}
        >Add to Cart</ChicCTA>
      </CTA>
      <CTA>
        <ChicCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
          onClick={removeFromCart}
        >Remove Cart</ChicCTA>
      </CTA>
      <CTA>
        <ChicCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
          onClick={emptyCart}
        >Clear Cart</ChicCTA>
      </CTA>
    </FORM>
  )
}

export default ProductForm;
