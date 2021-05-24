import {
  useCallback,
  useContext,
  useReducer,
  useState
} from "react";
import { BUTTON } from "../components/chic-cta/styles";
import LocationContext from "../contexts/LocationContext";

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



function useTheme({ reducer = themeReducer, initTheme = 'chic' }) {

  const {
    state
  } = useContext(LocationContext), {
    primaryColor
  } = state;

  const [theme, UpdateTheme] = useReducer(reducer, {
    primaryColor: primaryColor,
    accentContrast: BasicContrast(primaryColor),
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