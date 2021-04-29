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

const SwatchGrid = ({ gap = 0.25 }) => {

  const {
    store,
    lineItems
  } = useContext(ShopContext), {
    title,
    images,
    description,
    options = [],
    variants = []
  } = useContext(ProductContext), {
    formState,
    updateVariant,
    updateOption
  } = useContext(ProductFormContext);
  const selectedVariant = variants.find(({ shopifyId }) => shopifyId === formState.id);
  console.log('options', options)

  console.log('formState', selectedVariant.selectedOptions, formState)


  let SwatchMap = (option, i) => {
    let Swatch = SwatchType(option.name);
    let selected = selectedVariant.selectedOptions.find(selected => option.name === selected.name);

    const {
      name,
      value
    } = selected;

    return (
      <ITEM key={i} gutter={gap}>
        <Swatch
          id={`swatch-${value.replace('#', '')}-${Date.now()}`}
          isCurrent={option.value === value}
          value={value}
          key={i}
          toggleSwatch={() => updateOption(option)}
        />
      </ITEM>
    );
  }

  let tiles = arrayToComponentSiblings(options, SwatchMap);


  return (
    <GRID ref={list => list} gutterOffset={gap}>
      {tiles}
    </GRID>
  )
}

export default SwatchGrid;
