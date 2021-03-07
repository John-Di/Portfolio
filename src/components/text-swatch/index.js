import React from "react";
import Swatch from '../swatch';
import {
  VALUE
} from './styles';

export default function TextSwatch({
  id,
  name = "Color",
  value = [],
  gap = 0.25,
  toggleSwatch,
  isCurrent
}) {
  let inputID = id || `${name}-${value}`;
  return (
    <Swatch
      id={inputID}
      gap={gap}
      name={name}
      isCurrent={isCurrent}
      borderColor={`#000000`}
      toggleSwatch={toggleSwatch}
    >
      <VALUE
        case={`uppercase`}
      >{value}</VALUE>
    </Swatch>
  );
}
