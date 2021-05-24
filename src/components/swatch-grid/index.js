import React, { useContext } from "react";
import {
  SwatchType
} from './helpers';
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
import ProductContext from "../../contexts/ProductContext";
import ProductFormContext from "../../contexts/ProductFormContext";

const SwatchGrid = ({ gap = 0.25, values = [], name }) => {

  const {
    variants = []
  } = useContext(ProductContext), {
    formState,
    updateOption,
    optionIsSelected
  } = useContext(ProductFormContext);

  const selectedVariant = variants.find(({ shopifyId }) => shopifyId === formState);

  let Swatch = SwatchType(name);
  let SwatchMap = (value, i) => {
    const isSelected = optionIsSelected({ name, value });
    return (
      <ITEM key={i} gutter={gap}>
        <Swatch
          id={`swatch-${value.replace('#', '')}-${Date.now()}`}
          isCurrent={isSelected}
          value={value}
          key={i}
          toggleSwatch={() => updateOption({ value, name })}
        />
      </ITEM>
    )
  }
  let tiles = arrayToComponentSiblings(values, SwatchMap);


  return (
    <GRID ref={list => list} gutterOffset={gap}>
      {tiles}
    </GRID>
  )
}

export default SwatchGrid;
