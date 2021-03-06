import React from "react";
import {
  SWATCH,
  INPUT,
  LABEL
} from './styles';

export default function Swatch({
  id,
  name = "Option Name",
  gap = 0.25,
  children
}) {
  return (
    <SWATCH gutter={gap}>
      <INPUT id={id} type="radio" name={name} />
      {children}
    </SWATCH>
  );
}

export function SwatchLabel({
  id,
  isCurrent,
  backgroundColor,
  borderColor,
  toggleSwatch,
  children
}) {
  return (
    <LABEL
      isCurrent={isCurrent}
      htmlFor={id}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onClick={toggleSwatch}>
      {children}
    </LABEL>
  );
}