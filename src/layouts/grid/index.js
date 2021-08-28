import React from "react";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import {
  CONTAINER
} from './styles';
import useGrid from "./useGrid";

export default function Grid({
  items = [],
  ItemMap,
  className,
  selected,
  rules = []
}) {
  const {
    gridRef
  } = useGrid({ items });

  const WrapElement = (item, i) => (
    <li
      key={i}
      selected={selected === i}
    >
      {ItemMap(item, i)}
    </li>
  );

  return (
    <CONTAINER rules={rules} >
      <ul ref={gridRef} className={className}>
        {arrayToComponentSiblings(items, WrapElement)}
      </ul>
    </CONTAINER>
  );
}