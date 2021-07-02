export const actionTypes = {
  sort: 'SORT',
  filter: 'FILTER',
  page: 'PAGE',
  remove: 'REMOVE',
  add: 'ADD'
};

export const sortTypes = {
  bestSeller: 'bestseller',
  azAsc: 'alphabetical_ascending',
  azDes: 'alphabetical_descending',
  priceAs: 'price_ascending',
  priceDes: 'price_descending'
};

const getHighestPrice = variants => variants.reduce((acc, { price }) => +price > acc ? +price : acc, +variants[0].price)

export const sortMethods = {
  bestSeller: (a, b) => 1,
  azAsc: (a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0,
  azDes: (a, b) => a.title > b.title ? -1 : a.title < b.title ? 1 : 0,
  priceAs: (a, b) => getHighestPrice(a.variants) - getHighestPrice(b.variants),
  priceDes: (a, b) => getHighestPrice(a.variants) - getHighestPrice(b.variants)
};

const filterEquals = (targetFilter, { name, value }) => targetFilter.name === name && targetFilter.value === value,
  isActiveFilter = (filters, filter) => {
    return !!~filters.findIndex(filterEquals.bind(this, filter))
  };

const collectionReducer = (state, action) => {
  const { type, filter = {}, sorting = 'bestSeller' } = action,
    { filters = {} } = state,
    { name, value } = filter;

  switch (type) {
    case actionTypes.add: {
      if (!filters.hasOwnProperty(name)) {
        filters[name] = [];
      }

      if (!filters[name].includes(value)) {
        filters[name].push(value);
      }
      return {
        ...state,
        filters: filters
      }
    }
    case actionTypes.remove: {
      if (filters.hasOwnProperty(name) && filters[name].includes(value)) {
        filters[name] = filters[name].filter((f, i, s) => f !== value)

        if (!filters[name].length) {
          filters[name] = undefined
          delete filters[name];
        }
      }

      return {
        ...state,
        filters
      }
    }
    case actionTypes.sort: {
      let { activeProducts = [] } = state;
      const sortMethod = sortMethods[sorting];

      return {
        ...state,
        activeProducts: activeProducts.sort(sortMethod)
      }
    }
    default: return {
      ...state

    }
  }
}

export { filterEquals, isActiveFilter };

export default collectionReducer;