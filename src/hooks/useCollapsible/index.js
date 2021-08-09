import {
  useEffect, useRef, useState, useReducer
} from "react";
import collapisbleReducer, { actionTypes } from "./reducer";

function useCollapsible({
  name,
  options = []
}) {
  const dropdownRef = useRef(null);
  const [{
    isExpanded = false,
    isLocked = false
  }, UpdateState] = useReducer(collapisbleReducer, {
    isExpanded: false,
    isLocked: false
  });

  const reducers = {
    expandList: UpdateState.bind(this, {
      type: actionTypes.expand,
      isExpanded: true
    }),
    collapseList: UpdateState.bind(this, {
      type: actionTypes.expand,
      isExpanded: false
    }),
    toggleList: UpdateState.bind(this, {
      type: actionTypes.lock,
      isLocked: !isLocked
    })
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

export default useCollapsible;
