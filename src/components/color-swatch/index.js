import React from "react";
import Swatch, { SwatchLabel } from '../swatch';
import {
  VALUE
} from './styles';

export default function ColorSwatch({
  swatchRef,
  id,
  name = "Color",
  value = 'transparent',
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
        backgroundColor={value}
        borderColor={value === '#FFFFFF' || value === 'white' ? `#000000` : '#FFFFFF'}
        toggleSwatch={toggleSwatch}>
        <VALUE
          isHidden={true}
        >{value}</VALUE>
      </SwatchLabel>
    </Swatch>
  );
}
