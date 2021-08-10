import {
  useEffect, useRef, useState, useReducer
} from "react";
import collapisbleReducer, { actionTypes } from "./reducer";

const getLongestWidth = (width, li) => width > li.offsetWidth ? width : li.offsetWidth;
const getDropdownHeight = (height, li) => height + li.scrollHeight;

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

  const items = dropdownRef.current ? [...dropdownRef.current.querySelectorAll('li')] : []

  const adjustDropdownWidth = () => {
    if (!dropdownRef) {
      return;
    }
    const width = [...dropdownRef.current.querySelectorAll('li')].reduce(getLongestWidth, 0);
    const height = isExpanded && !!dropdownRef.current ? [...dropdownRef.current.querySelectorAll('li')].reduce(getDropdownHeight, 0) : 0;

    dropdownRef.current.style.width = `${width / 16}em`;
    dropdownRef.current.querySelector('ul').style.height = `${(height + (height ? 2 : 0)) / 16}em`;
  };

  useEffect(adjustDropdownWidth, [isExpanded, items])

  return {
    ...reducers,
    dropdownRef,
    name,
    isExpanded,
    options
  }
};

export default useCollapsible;
