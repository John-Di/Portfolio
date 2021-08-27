import {
  useEffect, useRef, useState, useReducer
} from "react";
import { adjustDropdownDimensions } from "./helpers";
import collapisbleReducer, { actionTypes } from "./reducer";


function useCollapsible({
  name,
  options = [],
  adjust
}) {
  const collapsibleRef = useRef(null);
  const [{
    isExpanded = false,
    isLocked = false,
    height = `auto`
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
    }),
    setHeight: height => UpdateState({
      type: actionTypes.height,
      height
    })
  };

  const items = collapsibleRef.current ? [...collapsibleRef.current.querySelectorAll('li')] : [];

  useEffect(adjust.bind(this, collapsibleRef.current, collapsibleRef.current && isExpanded), [isExpanded, items])

  return {
    ...reducers,
    collapsibleRef,
    name,
    isExpanded,
    height,
    options
  }
};

export default useCollapsible;
