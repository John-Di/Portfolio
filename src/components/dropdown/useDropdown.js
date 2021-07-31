import {
  useEffect, useRef, useState
} from "react";


export const actionTypes = {
  value: 'VALUE',
  reset: 'RESET'
};

function useDropdown({
  name,
  options = []
}) {
  const dropdownRef = useRef(null);
  const [isExpanded, UpdateState] = useState(false)

  const reducers = {
    expandList: UpdateState.bind(this, true),
    collapseList: UpdateState.bind(this, false)
  };

  const adjustDropdownWidth = () => {
    if (!dropdownRef) {
      return;
    }
    const width = [...dropdownRef.current.querySelectorAll('li')].reduce((width, li) => width > li.offsetWidth ? width : li.offsetWidth, 0);
    dropdownRef.current.style.width = `${width / 16}em`;
  };

  useEffect(adjustDropdownWidth, [])

  return {
    ...reducers,
    dropdownRef,
    dropdownHeight: isExpanded && !!dropdownRef.current ? [...dropdownRef.current.querySelectorAll('li')].reduce((height, li) => height + li.scrollHeight, 0) : 0,
    name,
    isExpanded,
    options
  }
};

export default useDropdown;
