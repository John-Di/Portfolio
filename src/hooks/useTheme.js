import {
  useCallback,
  useReducer,
  useState
} from "react";
import { BUTTON } from "../components/chic-cta/styles";

import BasicContrast from "../utils/BasicContrast";
import { randomColor } from "../utils/randoms";

const actionTypes = {
  id: 'ID',
  option: 'OPTION',
  theme: 'THEME',
  accent: `ACCENT`
}, themeTypes = {
  CHIC: 'chic',
  FAST: 'fast',
  FLORAL: 'floral',
  MINIMAL: 'minimal'
}

export const themeReducer = (state, action) => {
  const { type, primaryColor, theme } = action,
    { name } = theme;

  switch (type) {
    case actionTypes.accent: {
      return {
        ...state,
        primaryColor,
        accentContrast: BasicContrast(primaryColor),
        borderColor: primaryColor,
        name
      }
    }
    case actionTypes.theme: {
      switch (theme) {
        case themeTypes.CHIC: return {
          Button: BUTTON
        }
      }
    }
    default: return state
  }
}



function useTheme({ reducer = themeReducer, accentColor, initTheme = 'chic' }) {

  const [theme, UpdateTheme] = useReducer(reducer, {
    primaryColor: accentColor,
    accentContrast: BasicContrast(accentColor),
    name: initTheme
  });

  const updateAccentColor = color => UpdateTheme({
    type: actionTypes.accent,
    primaryColor: color
  });

  return {
    ...theme,
    UpdateTheme,
    updateAccentColor
  };
}

export default useTheme;