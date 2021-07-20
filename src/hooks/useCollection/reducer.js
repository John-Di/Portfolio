import {
  isActiveFilter,
  addFilter,
  removeFilter,
  resetFilter
}
  from "./helpers";

export const actionTypes = {
  sort: 'SORT',
  filter: 'FILTER',
  page: 'PAGE',
  add: 'ADD',
  remove: 'REMOVE',
  swap: 'SWAP',
  reset: 'RESET'
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
      return {
        ...state,
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

export { isActiveFilter };

export default collectionReducer;