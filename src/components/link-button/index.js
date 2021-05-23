import React from 'react';
import {
  BUTTON
} from './styles';

export default function Button({ children, type, onClick, accentColor, backgroundColor, parentColor, maxWidth, textColor = `#000000`, borderColor, theme }) {
  return (
    <BUTTON
      backgroundColor={backgroundColor}
      accentColor={accentColor}
      parentColor={parentColor}
      textColor={textColor}
      borderColor={borderColor}
      theme={theme}
      maxWidth={maxWidth}
      onClick={onClick}
      type={type}
    >
      {children}
    </BUTTON>);
}
