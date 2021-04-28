import React from 'react';
import {
  randomColor
} from '../utils/randoms';
import ThemeContext from '../contexts/ThemeContext';

const ThemeProvider = ({ location = {}, children }) => {
  const accentColor = location.state ? location.state.accentColor : randomColor();
  console.log('ThemeProvider.accentColor', accentColor);

  return (
    <ThemeContext.Provider value={{
      accentColor
    }} >
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider;