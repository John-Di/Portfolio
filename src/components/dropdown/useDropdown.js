import {
  useReducer, useRef, useState
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
  const dropdownRef = useRef(null);
  const [isExpanded, UpdateState] = useState(false)

  const reducers = {
    expandList: UpdateState.bind(this, true),
    collapseList: UpdateState.bind(this, false)
  };

  return {
    ...reducers,
    dropdownRef,
    dropdownHeight: isExpanded && dropdownRef.current ? [...dropdownRef.current.querySelectorAll('li')].reduce((height, li) => height + li.scrollHeight, 0) : 0,
    dropdownWidth: dropdownRef.current ? [...dropdownRef.current.querySelectorAll('li')].reduce((height, li) => height > li.scrollWidth ? height : li.scrollWidth, 0) : 0,
    name,
    isExpanded,
    options
  }
};

export default useDropdown;
