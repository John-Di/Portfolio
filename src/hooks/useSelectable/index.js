import {
  useReducer,
  useState
} from "react";
import
selectableReducer,
{ actionTypes } from './reducer';

function useSelectable({
  name,
  labels = [],
  options = [],
  selected = []
}) {
  const [values, UpdateSelection] = useReducer(selectableReducer, selected),
    optionLabels = labels ? labels : options,

    reducers = {
      update: value => UpdateSelection(value),
      add: value => UpdateSelection({
        type: actionTypes.add,
        value
      }),
      remove: value => UpdateSelection({
        type: actionTypes.remove,
        value
      }),
      set: value => UpdateSelection({
        type: actionTypes.set,
        value
      }),
      reset: value => UpdateSelection({
        type: actionTypes.reset,
        value
      })
    },
    labelling = {
      optionLabels,
      selectedLabel: selected.length === 1 ? optionLabels[values[0]] : `Select ${name}`,
      deselectedLabel: selected.length ? `Deselect ${name}` : `Select ${name}`,
      labels
    };

  const returnStuff = {
    ...reducers,
    ...labelling,
    selected: values,
    values: options,
    value: values[0],
    hasSelection: !!selected.length
  };

  return returnStuff;
};

export default useSelectable;
