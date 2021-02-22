import React from "react";
import Swatch, { SwatchLabel } from '../swatch';
import {
  VALUE
} from './styles';

export default function TextSwatch({
  swatchRef,
  id,
  name = "Color",
  value = [],
  gap = 0.25,
  isActive,
  toggleSwatch,
  isCurrent
}) {
  return (
    <Swatch
      id={id}
      gap={gap}
      name={name}
      isActive={isActive}
    >
      <SwatchLabel
        swatchRef={swatchRef}
        className={isCurrent && 'current'}
        isCurrent={isCurrent}
        htmlFor={id}
        borderColor={`#000000`}
        toggleSwatch={toggleSwatch}>
        <VALUE
          case={`uppercase`}
        >{value}</VALUE>
      </SwatchLabel>
    </Swatch>
  );
}
