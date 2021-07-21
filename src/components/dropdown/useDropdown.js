import {
  useReducer, useState
} from "react";


export const actionTypes = {
  value: 'VALUE',
  reset: 'RESET'
};

function useDropdown({
  name,
  selected,
  options = []
}) {
  const [value, UpdateState] = useState(selected);

  const reducers = {
    updateSelect: value => UpdateState(value),
    resetSelection: UpdateState.bind(``)
  };

  return {
    ...reducers,
    name,
    options
  }
}

export default useDropdown;
