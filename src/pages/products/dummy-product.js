import * as React from "react";
import {
  randomColor,
  // randomImage,
  // randomIntegerEx,
  // randomBool,
  randomImageArray
} from '../../utils/randoms';
import ProductPage from '../../layouts/product-page';
// import ImageGallerySection from "../../sections/image-gallery-section";


// markup
const DummyProduct = ({
  title = 'Dummy Product',
  price = '$19.99',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  images = randomImageArray(),
  options = [{
    "name": "Color",
    "colors": [
      "white", "black", "#708090", "#2F4F4F"
    ]
  }, {
    "name": "Size",
    "values": [
      "xs", "s", "m", "l", "xl"
    ]
  }]
}) => {
  let accentColor = randomColor();

  return (
    <ProductPage
      images={images}
      accentColor={accentColor}
      title={title}
      price={price}
      description={description}
      options={options}
    />
  )
}

export default DummyProduct;
