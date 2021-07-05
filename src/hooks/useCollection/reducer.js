import { faTrailer } from "@fortawesome/free-solid-svg-icons";
import { sortMethods } from "./sorting";

export const actionTypes = {
  sort: 'SORT',
  filter: 'FILTER',
  page: 'PAGE',
  add: 'ADD',
  remove: 'REMOVE',
  swap: 'SWAP'
};

const filterEquals = (targetFilter, { name, value }) => targetFilter.name === name && targetFilter.value === value,
  isActiveFilter = (filters, filter) => {
    return !!~filters.findIndex(filterEquals.bind(this, filter))
  },
  addFilter = (filters, { name, value }) => {
    console.log('addFilter', filters);
    if (!filters.hasOwnProperty(name)) {
      filters[name] = [];
    }

    if (!filters[name].includes(value)) {
      filters[name].push(value);
    }
    return filters;
  },
  removeFilter = (filters = {}, { name, value }) => {
    console.log('removeFilter b4', filters);
    if (filters.hasOwnProperty(name) && filters[name].includes(value)) {
      filters[name] = filters[name].filter((f, i, s) => f !== value);

      if (!filters[name].length) {
        filters[name] = undefined
        delete filters[name];
      }
    }

    console.log('removeFilter atr', filters);
    return filters;
  },
  getOption = (filters, { name, value }) => {
    const index = Object.keys(filters).findIndex(filter => filter === name);
    console.log(filters, Object.keys(filters), { name, value });
    return index < 0 ? [{ name, value }] : filters[Object.keys(filters)[index]];
  };

const collectionReducer = (state, action) => {
  const { type, filter = {}, sorting = 'bestSeller' } = action,
    { filters = {} } = state,
    { name, value } = filter;

  switch (type) {
    case actionTypes.add: {
      return {
        ...state,
        filters: addFilter(filters, filter)
      };
    }
    case actionTypes.remove: {
      return {
        ...state,
        filters: removeFilter(filters, filter)
      };
    }
    case actionTypes.sort: {
      let { activeProducts = [] } = state;
      const sortMethod = sortMethods[sorting];

      return {
        ...state,
        activeProducts: activeProducts.sort(sortMethod),
        sorting
      }
    }
    case actionTypes.swap: {
      if (filters.hasOwnProperty(name)) {
        filters[name] = []
      }
      return {
        ...state,
        filters: addFilter(filters, filter)
      }
    }
    default: return {
      ...state

    }
  }
}

export { filterEquals, isActiveFilter };

export default collectionReducer;