import React, { useContext } from "react";
import {
  getSwatch
} from './helpers';
import ProductFormContext from "../../contexts/ProductFormContext";
import Grid from "../../layouts/grid";
import GenerateUniqueId from "../../utils/GenerateUniqueId";

const SwatchGrid = ({ gap = 0.25, values = [], name, type }) => {

  const {
    updateOption,
    optionIsSelected
  } = useContext(ProductFormContext);

  let Swatch = getSwatch(name);
  let SwatchMap = (value, i) => (
    <Swatch
      id={GenerateUniqueId(`swatch-${value.replace('#', '')}`)}
      isCurrent={optionIsSelected({ name, value })}
      value={value}
      key={i}
      type={type}
      toggleSwatch={() => {
        return updateOption({ value, name })
      }}
    />
  );

  return (
    <Grid
      items={values}
      ItemMap={SwatchMap}
      rules={[{
        gap: [gap, gap]
      }]} />
  )
}

export default SwatchGrid;
