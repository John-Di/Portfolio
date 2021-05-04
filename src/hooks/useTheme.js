import {
  useCallback,
  useReducer,
  useState
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

function useTheme({ reducer = themeReducer, accentColor, initTheme = 'fancy' }) {


  const [theme, changeTheme] = useState({
    accentColor: randomColor(),
    name: initTheme
  });

  const updateTheme = theme => changeTheme({ accentColor, ...theme });
  return {
    ...theme,
    updateTheme
  };
}

export default useTheme;