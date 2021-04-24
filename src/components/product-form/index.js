import React, {
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
    addVariantToCart
  } = useContext(ShopContext), {
    id
  } = formState;

  const addToCart = async e => {
    e.preventDefault();
    return await addVariantToCart(id, 1);
  };

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
    </FORM>
  )
}

export default ProductForm;
