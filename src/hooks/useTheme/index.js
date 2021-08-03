import {
  useCallback,
  useContext,
  useReducer,
  useState
} from "react";
import {
  BUTTON
} from "../../components/chic-cta/styles";
// import Chic from "../../styles";
import LocationContext from "../../contexts/LocationContext";

import BasicContrast from "../../utils/BasicContrast";
import { randomColor } from "../../utils/randoms";

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
        primaryContrast: BasicContrast(primaryColor),
        borderColor: primaryColor,
        name
      }
    }
    case actionTypes.theme: {
      switch (theme) {
        case themeTypes.CHIC:
      }
    }
    default: return {
      Button: BUTTON
    }
  }
}

function useTheme() {

  const {
    primaryColor
  } = useContext(LocationContext),
    color = primaryColor ? primaryColor : randomColor(),
    [theme, UpdateTheme] = useReducer(themeReducer, {
      primaryColor: color,
      primaryContrast: BasicContrast(color),
      name: themeTypes.CHIC,
      theme: themeTypes.CHIC
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