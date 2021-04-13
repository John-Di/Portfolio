import React, {
  useContext
} from "react";
import { size } from '../../utils/variables';
import FancyCTA from '../../components/fancy-cta';
import ShopContext from '../../contexts/ShopContext';
import ProductContext from "../../contexts/ProductContext";
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
    title,
    images,
    description,
    options = [],
    variants = []
  } = useContext(ProductContext), {
    formState
  } = useContext(ProductFormContext), {
    store,
    addVariantToCart
  } = useContext(ShopContext), {
    id
  } = formState;
  return (
    <FORM>
      {children}
      <CTA>
        <FancyCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
          onClick={async e => {
            e.preventDefault();
            await addVariantToCart(id, 1)
            const { checkout, client } = store
          }}
        >Add to Cart</FancyCTA>
      </CTA>
    </FORM>
  )
}

export default ProductForm;
