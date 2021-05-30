import React from "react";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import {
  GRID
} from './styles';

export default function Grid({
  gutterOffset = [],
  items = [],
  ItemMap,
  perRow = 8,
  className,
  selected
}) {
  const WrapElement = (item, i) => (
    <li key={i} selected={selected === i}>
      {ItemMap(item, i)}
    </li>
  );

  return (
    <GRID className={className} gutterOffset={gutterOffset} perRow={perRow}>
      {arrayToComponentSiblings(items, WrapElement)}
    </GRID>
  );
}