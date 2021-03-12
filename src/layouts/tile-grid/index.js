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
  itemMap
}) {

  const WrapElement = (value, i) => {
    return (
      <ITEM key={i} gutter={gutterOffset}>
        {itemMap(value, i)}
      </ITEM>
    )
  };

  return (
    <LIST ref={list => list} gutterOffset={gutterOffset}>
      {arrayToComponentSiblings(items, WrapElement)}
    </LIST>
  );
}