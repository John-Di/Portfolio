import {
  useReducer
} from "react";
import collectionReducer, { actionTypes, isActiveFilter } from './reducer';
import { allOptions } from './helpers';
import { sortMethods, sortTypes } from "./sorting";

function useCollection({
  products = [],
  ...props
}) {
  const options = allOptions(products);
  const [collectionState, UpdateState] = useReducer(
    collectionReducer,
    {
      sorting: 0,
      filters: props.activeFilters,
      activeProducts: products
    }
  ), {
    filters = {},
    sorting = 0
  } = collectionState,

    noSelectionOrIsSelectedOption = ({ name, values }) => {
      const activeFilters = filters.hasOwnProperty(name) && filters[name].length ? filters[name] : options[name];
      return !filters.hasOwnProperty(name) || values.some(value => activeFilters.includes(value))
    },

    filterOptionBySelection = ({ options }) => options.every(noSelectionOrIsSelectedOption),

    activeProducts = products.filter(filterOptionBySelection).sort(Object.values(sortMethods)[sorting]),

    reducers = {
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
      resetFilter: ({ name }) => UpdateState({
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

  console.log('object.values', sorting);
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