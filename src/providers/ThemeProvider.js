import React from 'react';
import {
  randomColor
} from '../utils/randoms';
import ThemeContext from '../contexts/ThemeContext';
import useTheme from '../hooks/useTheme';


const ThemeProvider = ({ location = {}, children }) => {
  const accentColor = location.state ? location.state.accentColor : randomColor();

  return (
    <ThemeContext.Provider value={useTheme({
      accentColor,
      location
    })} >
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider;