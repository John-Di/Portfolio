import React, { Children } from "react";
import Swatch from '../swatch';

export default function ColorSwatch({
  name = "Option Name",
  value = [],
  gap = 0.25
}) {
  return (
    <Swatch
      gutter={gap}
      value={value}
      name={name}
      backgroundColor={value}
      textHidden={true}
      borderColor={value === '#FFFFFF' || value === 'white' ? `#cccccc` : '#FFFFFF'}
    />
  );
}
