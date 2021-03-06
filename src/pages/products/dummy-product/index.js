import React, {
  useContext
} from "react";
import {
  randomColor,
  randomIntegerEx,
  randomIntegerIn,
  randomImageArray
} from '../../../utils/randoms';
import ProductPage from '../../../layouts/product-page';

const options = [{
  "name": "Color",
  "values": [
    "white", "black", "slategray", "darkslategray"
  ]
}, {
  "name": "Size",
  "values": [
    "xs", "s", "m", "l", "xl"
  ]
}];

function cartesian(args) {
  var r = [], max = args.length - 1;
  function helper(arr, i) {
    for (var j = 0, l = args[i].length; j < l; j++) {
      var a = arr.slice(0); // clone arr
      a.push(args[i][j]);
      if (i === max)
        r.push(a);
      else
        helper(a, i + 1);
    }
  }
  helper([], 0);
  return r;
}

const productImages = randomImageArray(options[0].values.length);

const variants = cartesian(options.map(o => o.values)).map((variantOptions, i) => {
  let price = `$${randomIntegerIn(1, 19)}9.99`;
  return ({
    title: `${variantOptions.join(' / ')} - ${price}`,
    options: variantOptions.map((option, i) => ({
      name: options[i].name,
      value: option
    })),
    option1: variantOptions[0] || null,
    option2: variantOptions[1] || null,
    option3: variantOptions[2] || null,
    id: randomIntegerIn(100000000, 999999999),
    images: productImages,
    price
  })
});

const DUMMY_PRODUCT = {
  title: 'Dummy Product',
  price: `$${randomIntegerIn(1, 19)}9.99`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  images: productImages,
  options,
  variants
};

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
