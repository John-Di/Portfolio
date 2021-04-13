import React from "react";
import {
  SwatchType
} from './helpers';
import TileGrid from "../../layouts/tile-grid";

export default function SwatchGrid({
  values = [],
  gap = 0.25,
  name,
  updateOption,
  selected
}) {
  let Swatch = SwatchType(name);

  let SwatchMap = (value, i) => (
    <Swatch
      id={`swatch-${value.replace('#', '')}-${Date.now()}`}
      isCurrent={selected === value}
      value={value}
      key={i}
      toggleSwatch={() => updateOption({ name, value })}
    />
  )

  return (
    <TileGrid gutterOffset={gap} items={values} ItemMap={SwatchMap} />
  );
}
