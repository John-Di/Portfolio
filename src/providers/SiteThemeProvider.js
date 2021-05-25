import React from 'react';
import {
  randomColor
} from '../utils/randoms';
import SiteThemeContext from '../contexts/SiteThemeContext';
import useTheme from '../hooks/useTheme';


const SiteThemeProvider = ({ location = {}, children }) => {
  return (
    <SiteThemeContext.Provider value={useTheme()}>
      {children}
    </SiteThemeContext.Provider>
  )
}
export default SiteThemeProvider;