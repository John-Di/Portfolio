import {
  useEffect, useRef, useReducer, useState
} from "react";
import { normalizeTileHeights } from "./helper";


function useGrid({ items = [] }) {
  const gridRef = useRef(null);
  const [numItems, updateNumItems] = useState(0);

  const adjustElement = () => {
    normalizeTileHeights(gridRef.current);
    const length = gridRef.current ? [...gridRef.current.children].length : 0;

    if (length !== numItems) {
      updateNumItems(length)
    }
  }


  useEffect(adjustElement, [gridRef, numItems, items.length]);

  return {
    gridRef
  }
};

export default useGrid;
