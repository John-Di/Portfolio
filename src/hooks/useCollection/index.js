import {
  useReducer
} from "react";
import collectionReducer, { actionTypes, isActiveFilter } from './reducer';
import { allOptions } from './helpers';

function useCollection({
  products = [],
  ...props
}) {
  const options = allOptions(products);
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
    addFilter: ({ name, value }) => UpdateState({
      type: actionTypes.add,
      ...collectionState,
      filter: { name, value },
      options: options[name]
    }),
    removeFilter: filter => UpdateState({
      type: actionTypes.remove,
      ...collectionState,
      filter,
      options: options[filter.name]
    }),
    clearAllFilters: () => UpdateState({
      type: actionTypes.option,
      ...collectionState
    }),
    resetFilter: name => UpdateState({
      type: actionTypes.reset,
      ...collectionState,
      filter: { name },
      options: options[name]
    }),
    toggleFilter: ({ name, value }) => UpdateState({
      type: actionTypes.swap,
      ...collectionState,
      filter: { name, value },
      options: options[name]
    })
  };

  const activeProducts = Object.keys(filters).length ?
    products.filter(({ options }) => options.every(({ name, values }) => !filters.hasOwnProperty(name) || values.some(value => filters[name].includes(value)))) : products;

  return {
    ...collectionState,
    ...reducers,
    products,
    options,
    activeProducts,
    isActiveFilter
  }
}

export default useCollection;