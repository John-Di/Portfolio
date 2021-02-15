import * as React from "react";
import { ARTICLE } from './styles';

// markup
const Product = ({ children }) => {
  return (
    <ARTICLE>
      {children}
    </ARTICLE>
  )
}

export default Product;