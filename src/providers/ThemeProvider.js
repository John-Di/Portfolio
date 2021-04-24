import React from 'react';
import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool
} from '../utils/randoms';
import ThemeContext from '../contexts/ThemeContext';

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{
      accentColor: randomColor()
    }} >
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider;