import React from "react";
import Swatch from '../swatch';
import {
  VALUE
} from './styles';

export default function ColorSwatch({
  id,
  name = "Color",
  value = 'transparent',
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
      backgroundColor={value}
      borderColor={(value === '#FFFFFF' || value === 'white') ? `#000000` : '#FFFFFF'}
      toggleSwatch={toggleSwatch}
    >
      <VALUE
        isHidden={true}
      >{value}</VALUE>
    </Swatch>
  );
}
