import {
  useCallback,
  useContext,
  useReducer,
  useState
} from "react";
import ShopContext from "../contexts/ShopContext";
import SiteThemeContext from "../contexts/SiteThemeContext";
import { randomColor } from "../utils/randoms";

const actionTypes = {
  id: 'ID',
  option: 'OPTION',
  theme: 'THEME'
}

export const locationReducer = (state, action) => ({
  ...state
});

function useLocation({ reducer = locationReducer, location, primaryColor }) {

  console.log('useLocation', location, location.pathname)
  const {
    store,
    checkoutURL,
    cartCount
  } = useContext(ShopContext);

  const [state, updateLocation] = useState({
    pathname: typeof window !== 'undefined' ? window.location.href : '',
    primaryColor: primaryColor || randomColor()
  });

  console.log('useLocation', state, state)
  const pathContains = str => (state.pathname.indexOf(str) >= 0);

  return {
    state,
    updateLocation,
    pathContains,
    checkoutURL,
    showCart: checkoutURL || pathContains('/cart') || pathContains('/cart/')
  };
}

export default useLocation;