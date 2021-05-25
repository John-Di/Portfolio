import {
  useCallback,
  useContext,
  useReducer,
  useState
} from "react";
import ShopContext from "../contexts/ShopContext";
import SiteThemeContext from "../contexts/SiteThemeContext";
import BasicContrast from "../utils/BasicContrast";
import { randomColor } from "../utils/randoms";

const actionTypes = {
  id: 'ID',
  option: 'OPTION',
  theme: 'THEME',
  accent: `ACCENT`
};

export const locationReducer = (state, action) => {
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
    default: return state
  }
}

function useLocation({ location, primaryColor }) {

  const {
    store,
    checkoutURL,
    cartCount
  } = useContext(ShopContext);

  const [state, UpdateLocation] = useReducer(locationReducer, {
    ...location,
    pathname: typeof window !== 'undefined' ? window.location.href : '',
    primaryColor: primaryColor || randomColor()
  });

  const pathContains = str => (state.pathname.indexOf(str) >= 0);

  return {
    state,
    UpdateLocation,
    pathContains,
    checkoutURL,
    showCart: checkoutURL || pathContains('/cart') || pathContains('/cart/')
  };
}

export default useLocation;