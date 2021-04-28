import React, { useContext } from "react";
import TileGrid from '../../layouts/tile-grid';
import LineItemTile from "../line-item-tile";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import ShopContext from "../../contexts/ShopContext";
import LineItemProvider from "../../providers/LineItemProvider";
import {
  GRID,
  ITEM
} from './styles';

const LineItemGrid = ({ gap = 0.75 }) => {

  const {
    store,
    lineItems
  } = useContext(ShopContext);

  console.log('lineItems', lineItems);

  let TileMap = (tile, i) => (
    <ITEM key={i} gutter={gap}>
      <LineItemProvider lineItem={tile}>
        <LineItemTile />
      </LineItemProvider>
    </ITEM>
  )

  let tiles = arrayToComponentSiblings(lineItems, TileMap);

  console.log(tiles)

  return (
    <GRID ref={list => list} gutterOffset={gap}>
      {tiles}
    </GRID>
  )
}

export default LineItemGrid;
