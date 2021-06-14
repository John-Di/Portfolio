import {
  useReducer
} from "react";
import BasicContrast from "../utils/BasicContrast";
import { randomColor } from "../utils/randoms";

const actionTypes = {
  id: 'ID',
  option: 'OPTION',
  theme: 'THEME',
  accent: `ACCENT`,
  addProperty: `ADD`
};

export const locationReducer = (state, action) => {
  const { type, primaryColor, theme, key, value } = action,
    { name } = theme;

  switch (type) {
    case actionTypes.addProperty: {
      let newState = state;
      newState[key] = value;
      return newState;
    }
    case actionTypes.accent: {
      return {
        ...state,
        primaryColor,
        primaryContrast: BasicContrast(primaryColor),
        borderColor: primaryColor,
        name
      }
    }
    default: return state
  }
}

function useLocation({ location }) {

  const [state, UpdateLocation] = useReducer(locationReducer, {
    ...location,
    state: location.state,
    pathname: typeof window !== 'undefined' ? window.location.href : ''
  });

  const pathContains = str => (state.pathname.indexOf(str) >= 0);
  return {
    ...state,
    ...state.state,
    UpdateLocation,
    pathContains
  };
}

export default useLocation;