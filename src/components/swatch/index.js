import React from "react";
import stringToNumber from "../../utils/StringToNumber";
import {
  INPUT,
  LABEL,
  DIV
} from './styles';

export default function Swatch({
  id,
  children,
  isCurrent,
  backgroundColor,
  name = "Option Name",
  toggleSwatch,
  type = ''
}) {
  switch (stringToNumber(type)) {
    case stringToNumber('label'): return (
      <div>
        <INPUT ref={input => input && input.focus()} id={id} type="radio" name={name} />
        <LABEL
          isCurrent={isCurrent}
          htmlFor={id}
          backgroundColor={backgroundColor}
          onClick={toggleSwatch}>
          {children}
        </LABEL>
      </div>
    );
    case stringToNumber('div'):
    default: return (
      <DIV
        isCurrent={isCurrent}
        backgroundColor={backgroundColor}>
        {children}
      </DIV>
    );
  }
}