import React, { useContext } from "react";
import {
  SwatchType
} from './helpers';
import ProductContext from "../../contexts/ProductContext";
import ProductFormContext from "../../contexts/ProductFormContext";
import Grid from "../../layouts/grid";
import GenerateUniqueId from "../../utils/GenerateUniqueId";

const SwatchGrid = ({ gap = 0.5, values = [], name, type }) => {

  const {
    //   variants = []
    // } = useContext(ProductContext), {
    // formState,
    updateOption,
    optionIsSelected
  } = useContext(ProductFormContext);

  // const selectedVariant = variants.find(({ shopifyId }) => shopifyId === formState);

  let Swatch = SwatchType(name);
  let SwatchMap = (value, i) => (
    <Swatch
      id={GenerateUniqueId(`swatch-${value.replace('#', '')}`)}
      isCurrent={optionIsSelected({ name, value })}
      value={value}
      key={i}
      type={type}
      toggleSwatch={() => updateOption({ value, name })}
    />
  );

  return (
    <Grid items={values} ItemMap={SwatchMap} gutterOffset={[{
      row: gap,
      col: gap
    }]} />
  )
}

export default SwatchGrid;
