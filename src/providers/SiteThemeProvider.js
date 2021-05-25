import React from 'react';
import {
  randomColor
} from '../utils/randoms';
import SiteThemeContext from '../contexts/SiteThemeContext';
import useTheme from '../hooks/useTheme';


const SiteThemeProvider = ({ location = {}, children }) => {
  const primaryColor = location.state ? location.state.primaryColor : randomColor();
  console.log('SiteThemeProvider', location);
  console.log('SiteThemeProvider', primaryColor);

  return (
    <SiteThemeContext.Provider value={useTheme()}>
      {children}
    </SiteThemeContext.Provider>
  )
}
export default SiteThemeProvider;