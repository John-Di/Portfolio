import React from 'react';
import Button from '../button';

export default function FancyCTA({ children, modest, accentColor, backgroundColor, textColor = "#000000", borderColor }) {

  borderColor = borderColor ? borderColor : textColor;

  return (
    <Button
      modest={modest}
      accentColor={accentColor}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      theme={'fancy'}
    >
      {children}
    </Button>);
}
