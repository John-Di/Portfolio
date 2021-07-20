import { option_sort } from "../../utils/variables";

const optionSort = (order = [], a, b) => {
  if (!!~order.indexOf(a) && !!~order.indexOf(b)) {
    return 0;
  } else if (!!~order.indexOf(a)) {
    return -1;
  } else if (!!~order.indexOf(b)) {
    return 1;
  } else if (order.indexOf(a) < order.indexOf(b)) {
    return 1;
  } else if (order.indexOf(a) > order.indexOf(b)) {
    return -1;
  } else {
    return 0;
  }
}

const allOptions = (products = []) => products.map(({ options = [] }) => options).flat().reduce((acc, { name, values = [] }, i) => {
  if (!acc.hasOwnProperty(name)) {
    acc[name] = [];
  }
  acc[name] = [...acc[name], ...values].filter((value, i, self) => self.indexOf(value) === i).sort(optionSort.bind(this, option_sort[name]));
  return acc;
}, {})



export { allOptions };