import React from "react";
import {
  SWATCH,
  INPUT,
  LABEL
} from './styles';

export default function Swatch({
  id,
  children,
  isCurrent,
  backgroundColor,
  borderColor,
  name = "Option Name",
  gap = 0.25,
  toggleSwatch
}) {
  return (
    <SWATCH gutter={gap}>
      <INPUT id={id} type="radio" name={name} />
      <LABEL
        isCurrent={isCurrent}
        htmlFor={id}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        onClick={toggleSwatch}>
        {children}
      </LABEL>
    </SWATCH>
  );
}