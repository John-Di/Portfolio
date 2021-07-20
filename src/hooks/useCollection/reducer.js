import { sortMethods } from "./sorting";

export const actionTypes = {
  sort: 'SORT',
  filter: 'FILTER',
  page: 'PAGE',
  add: 'ADD',
  remove: 'REMOVE',
  swap: 'SWAP',
  reset: 'RESET'
};

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

    return filters;
  },
  removeFilter = (filters = {}, { name, value }) => {
    if (!filters.hasOwnProperty(name)) {
      return filters;
    }

    if (filters.hasOwnProperty(name) && filters[name].includes(value)) {
      filters[name] = filters[name].filter((f, i, s) => f !== value);
    }

    if (!filters[name].length || value === null) {
      filters[name] = undefined
      delete filters[name];
    }

    return filters;
  },
  resetFilter = (state, filters = {}, { name, value }, options = []) => {
    if (!value || !filters[name].length) {
      filters[name] = options;
    }

    if (!Object.keys(filters).length) {
      return state;
    }

    return {
      ...state,
      filters
    }
  };

const collectionReducer = (state, action) => {
  const { type, filter = {}, sorting = 'bestSeller', options = [] } = action,
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
        filters[name] = [];
      }

      if (value && options.includes(value)) {
        filters[name] = [value];

        return {
          ...state,
          filters
        }
      } else { }

      return resetFilter(state, filters, filter, options);
    }
    case actionTypes.reset: return resetFilter(state, filters, filter, options);
    default: return {
      ...state
    }
  }
}

export { filterEquals, isActiveFilter };

export default collectionReducer;