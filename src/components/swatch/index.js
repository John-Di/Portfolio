import React from "react";
import {
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
    <div>
      <INPUT ref={input => input && input.focus()} id={id} type="radio" name={name} />
      <LABEL
        isCurrent={isCurrent}
        htmlFor={id}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        onClick={toggleSwatch}>
        {children}
      </LABEL>
    </div>
  );
}