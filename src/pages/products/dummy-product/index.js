import * as React from "react";
import {
  randomColor
} from '../../../utils/randoms';
import DUMMY_PRODUCT from './data';
import ProductPage from '../../../layouts/product-page';
// import ImageGallerySection from "../../sections/image-gallery-section";

// markup
const DummyProduct = () => {
  let accentColor = randomColor();

  return (
    <ProductPage {...DUMMY_PRODUCT} accentColor={accentColor} />
  )
}

export default DummyProduct;
