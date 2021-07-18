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

  console.log('current', name, selected);

  return {
    ...reducers,
    name,
    options
  }
}

export default useDropdown;
