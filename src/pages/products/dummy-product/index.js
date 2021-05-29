import React from "react";
import {
  randomColor,
  randomIntegerEx,
  randomIntegerIn,
  randomImageArray,
  randomBool
} from '../../../utils/randoms';
import ProductProvider from "../../../providers/ProductProvider";
import PageTemplateProvider from "../../../providers/PageTemplateProvider";
import StoreTemplateProvider from "../../../providers/StoreTemplateProvider";



const productOptions = [{
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

const optionImagesMap = productOptions.reduce((acc, { name, values }, i) => {
  acc[name] = values.reduce((acc, value, i) => {
    acc[value] = name === 'Color' ? randomImageArray(values.length + (randomBool() ? 1 : 0)) : []
    return acc;
  }, {})
  return acc;
}, {});

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

const variants = cartesian(productOptions.map(o => o.values)).map((variantOptions, i) => {
  let price = `$${randomIntegerIn(1, 19)}9.99`;

  let options = variantOptions.map((value, i) => {
    let { name } = productOptions[i];

    return ({
      name,
      value,
      images: optionImagesMap[name][value]
    });
  });

  return ({
    title: `${variantOptions.join(' / ')} - ${price}`,
    options,
    option1: variantOptions[0] || null,
    option2: variantOptions[1] || null,
    option3: variantOptions[2] || null,
    id: randomIntegerIn(100000000, 999999999),
    images: options.map(option => option.images).flat(),
    price
  })
});

const DUMMY_PRODUCT = {
  title: 'Dummy Product',
  price: `$${randomIntegerIn(1, 19)}9.99`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  images: [...new Set(variants.reduce((acc, { images }, i) => [...acc, ...images], []))],
  options: productOptions,
  variants
};

const ProductTemplate = ({ location, children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {

  return (
    <PageTemplateProvider location={location}>
      <StoreTemplateProvider location={location} >
        <ProductProvider product={DUMMY_PRODUCT}>
          {/* <ProductPage location={location} /> */}
          Sup
      </ProductProvider>
      </StoreTemplateProvider>
    </PageTemplateProvider>
  )
}

export default ProductTemplate;
