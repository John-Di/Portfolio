import React, { useContext } from "react";
import {
  SwatchType
} from './helpers';
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
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
  let SwatchMap = (value, i) => (
    <ITEM
      key={i}
      gutter={gap}
      isCurrent={optionIsSelected({ name, value })}>
      <Swatch
        id={`swatch-${value.replace('#', '')}-${Date.now()}`}
        isCurrent={optionIsSelected({ name, value })}
        value={value}
        key={i}
        toggleSwatch={() => updateOption({ value, name })}
      />
    </ITEM>
  );
  let tiles = arrayToComponentSiblings(values, SwatchMap);


  return (
    <GRID ref={list => list} gutterOffset={gap}>
      {tiles}
    </GRID>
  )
}

export default SwatchGrid;
