import {
  useCallback,
  useReducer
} from "react";
import { randomColor } from "../utils/randoms";

const actionTypes = {
  id: 'ID',
  option: 'OPTION',
  theme: 'THEME'
}

export const themeReducer = (state, { theme }) => ({
  ...state,
  theme
});

function useTheme({ reducer = themeReducer, accentColor = randomColor(), initTheme = 'fancy' }) {


  const [theme, changeTheme] = useReducer(reducer, {
    accentColor,
    name: initTheme
  });

  const updateTheme = theme => (changeTheme({ type: 'THEME', theme }));
  return {
    ...theme,
    updateTheme
  };
}

export default useTheme;