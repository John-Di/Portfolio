import React from "react";
import { size } from '../../utils/variables';
import FancyCTA from '../../components/fancy-cta';
import {
  FORM,
  CTA
} from './styles';

// markup
const ProductForm = ({
  children
}) => {

  return (
    <FORM>
      {children}
      <CTA>
        <FancyCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
        >Add to Cart</FancyCTA>
      </CTA>
    </FORM>
  )
}

export default ProductForm;
