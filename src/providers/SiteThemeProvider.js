import React from 'react';
import {
  randomColor
} from '../utils/randoms';
import SiteThemeContext from '../contexts/SiteThemeContext';
import useTheme from '../hooks/useTheme';


const SiteThemeProvider = ({ location = {}, children }) => {
  const accentColor = location.state ? location.state.accentColor : randomColor();
  console.log('SiteThemeProvider', location);
  console.log('SiteThemeProvider', accentColor);

  return (
    <SiteThemeContext.Provider value={
      useTheme({
        accentColor,
        location
      })
    }>
      {children}
    </SiteThemeContext.Provider>
  )
}
export default SiteThemeProvider;