import React, { useContext } from 'react';
import SiteThemeContext from '../../contexts/SiteThemeContext';
import { BUTTON } from './styles';

export default function ChicCTA({ children, type, onClick, modest, backgroundColor, maxWidth, textColor = "#000000", borderColor }) {

  borderColor = borderColor ? borderColor : textColor;

  return (
    <BUTTON
      modest={modest}
      backgroundColor={backgroundColor}
      maxWidth={maxWidth}
      onClick={onClick}
    >
      {children}
    </BUTTON>);
}
