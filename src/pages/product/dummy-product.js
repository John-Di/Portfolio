import * as React from "react";
import Page from '../../layouts/page';
import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool,
  randomImageArray
} from '../../utils/randoms';
import ProductPage from '../../layouts/product-page';
import ImageGallerySection from "../../sections/image-gallery-section";


// markup
const DummyProduct = ({ title, price, images = randomImageArray() }) => {
  let accentColor = randomColor();

  return (
    <ProductPage
      images={images}
      accentColor={accentColor}
      title={'Dummy Product'}
      price={'$19.99'}
    />
  )
}

export default DummyProduct;
