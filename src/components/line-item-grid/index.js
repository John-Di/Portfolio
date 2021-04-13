import React from "react";
import TileGrid from '../../layouts/tile-grid';
import LineItemTile from "../line-item-tile";
import {
  randomColor,
  randomImage,
  randomIntegerIn
} from '../../utils/randoms';
import { jsxCloneArray } from "../../utils/dom-builder";
// markup

const DUMMY_CART = [
  {
    title: 'Dummy Product',
    price: `$${randomIntegerIn(1, 19)}9.99`,
    id: randomIntegerIn(100000000, 999999999),
    image: randomImage()
  }
]

const LineItemGrid = ({ accentColor = randomColor(), ...items }) => {

  let Tile = {
    ...LineItemTile,
    accentColor
  };

  let TileMap = (tile, i) => (
    <LineItemTile
      accentColor={accentColor}
      key={i}
      heading={tile.title}
      price={tile.price}
      backgroundImage={tile.image}
    />
  )

  return (
    <TileGrid itemMap={TileMap} items={jsxCloneArray(4, () => (
      {
        title: 'Dummy Product',
        price: `$${randomIntegerIn(1, 19)}9.99`,
        id: randomIntegerIn(100000000, 999999999),
        image: randomImage()
      }))} perRow={4} />
  )
}

export default LineItemGrid;
