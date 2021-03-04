import React, {
  useContext
} from "react";
import {
  randomColor,
  randomIntegerEx
} from '../../../utils/randoms';
import DUMMY_PRODUCT from './data';
import ProductPage from '../../../layouts/product-page';
// import ImageGallerySection from "../../sections/image-gallery-section";

const ProductContext = React.createContext(DUMMY_PRODUCT);

// markup
const DummyProduct = () => {
  let accentColor = randomColor();
  const DummyProductContext = useContext(ProductContext);
  let selectedVariant = DummyProductContext.variants[randomIntegerEx(0, DummyProductContext.variants.length)];
  return (
    <ProductPage accentColor={accentColor} selectedID={selectedVariant.id} {...DummyProductContext} />
  )
}

export default DummyProduct;
