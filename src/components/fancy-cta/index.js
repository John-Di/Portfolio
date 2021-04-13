import React from 'react';
import Button from '../button';

export default function FancyCTA({ children, type, onClick, modest, accentColor, backgroundColor, maxWidth, textColor = "#000000", borderColor }) {

  borderColor = borderColor ? borderColor : textColor;

  return (
    <Button
      modest={modest}
      accentColor={accentColor}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      theme={'fancy'}
      maxWidth={maxWidth}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>);
}
