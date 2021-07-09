import {
  useReducer
} from "react";
import collectionReducer, { actionTypes, isActiveFilter, getProductOptionValues } from './reducer';

function useCollection({
  products = [],
  ...props
}) {
  const [collectionState, UpdateState] = useReducer(collectionReducer, {
    sorting: props.defaultSorting,
    filters: props.activeFilters,
    activeProducts: products
  }), {
    filters = {}
  } = collectionState;

  const reducers = {
    updateSorting: sorting => UpdateState({
      type: actionTypes.sort,
      ...collectionState,
      sorting
    }),
    addFilter: filter => UpdateState({
      type: actionTypes.add,
      ...collectionState,
      filter
    }),
    removeFilter: filter => UpdateState({
      type: actionTypes.remove,
      ...collectionState,
      filter
    }),
    clearAllFilters: () => UpdateState({
      type: actionTypes.option,
      ...collectionState
    }),
    resetFilter: name => UpdateState({
      type: actionTypes.reset,
      ...collectionState,
      filter: { name },
      options: getProductOptionValues(products, name)
    }),
    toggleFilter: ({ name, value }) => UpdateState({
      type: actionTypes.swap,
      ...collectionState,
      filter: { name, value },
      options: getProductOptionValues(products, name)
    })
  };

  const activeProducts = Object.keys(filters).length ?
    products.filter(({ options }) => options.every(({ name, values }) => !filters.hasOwnProperty(name) || values.some(value => filters[name].includes(value)))) : products;

  return {
    ...collectionState,
    ...reducers,
    products,
    activeProducts,
    isActiveFilter
  }
}

export default useCollection;