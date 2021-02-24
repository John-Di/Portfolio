import {
  randomImageArray
} from '../../../utils/randoms';

const options = [{
  "name": "Color",
  "colors": [
    "white", "black", "#708090", "#2F4F4F"
  ],
  "type": "color"
}, {
  "name": "Size",
  "values": [
    "xs", "s", "m", "l", "xl"
  ],
  "type": "size"
}];

const DUMMY_PRODUCT = {
  title: 'Dummy Product',
  price: '$19.99',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  images: randomImageArray(),
  options,
};

export default DUMMY_PRODUCT;