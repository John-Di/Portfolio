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

const filterEquals = (targetFilter, { name, value }) => targetFilter.name === name && targetFilter.value === value,
  isActiveFilter = (filters, filter) => {
    return !!~filters.findIndex(filterEquals.bind(this, filter))
  },
  addFilter = (filters = {}, { name, value }) => {
    if (!filters.hasOwnProperty(name)) {
      filters[name] = [];
    }

    if (!filters[name].includes(value)) {
      filters[name].push(value);
    }
    filters[name].sort(optionSort.bind(this, option_sort[name]));
    return filters;
  },
  removeFilter = (filters = {}, { name, value }) => {
    if (!filters.hasOwnProperty(name)) {
      return filters;
    }

    if (filters[name].includes(value)) {
      filters[name] = filters[name].filter((f, i, s) => f !== value);
      filters[name].sort(optionSort.bind(this, option_sort[name]));
    }

    if (!filters[name].length || value === null) {
      filters[name] = undefined
      delete filters[name];
    }

    return filters;
  },
  resetFilter = (state, filters = {}, { name, value }, options = []) => {
    if (!value || !filters[name].length) {
      filters[name] = [];
    }

    filters[name].sort(optionSort.bind(this, option_sort[name]))

    return {
      ...state,
      filters
    }
  };

const allOptions = (products = []) => products.map(({ options = [] }) => options).flat().reduce((acc, { name, values = [] }, i) => {
  if (!acc.hasOwnProperty(name)) {
    acc[name] = [];
  }
  acc[name] = [...acc[name], ...values].filter((value, i, self) => self.indexOf(value) === i).sort(optionSort.bind(this, option_sort[name]));
  return acc;
}, {})


export { allOptions, filterEquals, isActiveFilter, addFilter, removeFilter, resetFilter };