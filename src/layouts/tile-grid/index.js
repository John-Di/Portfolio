import React from "react";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import {
  LIST,
  ITEM
} from './styles';

export default function TileGrid({
  gutterOffset = 0.75,
  items = [],
  ItemMap,
  perRow = 4
}) {
  const WrapElement = (item, i) => (
    <ITEM key={i} gutter={gutterOffset} maxWidth={perRow ? `${100 / perRow}%` : null}>
      {ItemMap(item, i)}
    </ITEM>
  );

  return (
    <LIST ref={list => list} gutterOffset={gutterOffset}>
      {arrayToComponentSiblings(items, WrapElement)}
    </LIST>
  );
}