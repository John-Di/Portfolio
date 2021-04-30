import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Button from '../button';

export default function FancyCTA({ children, type, onClick, modest, backgroundColor, maxWidth, textColor = "#000000", borderColor }) {

  borderColor = borderColor ? borderColor : textColor;

  const {
    updateTheme,
    accentColor,
    name
  } = useContext(ThemeContext);

  return (
    <Button
      modest={modest}
      accentColor={accentColor}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      theme={name}
      maxWidth={maxWidth}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>);
}
