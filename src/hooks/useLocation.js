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

export const locationReducer = (state, action) => ({
  ...state
});

function useLocation({ reducer = locationReducer, location, accentColor = randomColor() }) {

  console.log('useLocation', location, location.pathname)
  const [state, updateLocation] = useState({
    pathname: typeof window !== 'undefined' ? window.location.href : '',
    accentColor
  });

  console.log('useLocation', state, state)
  const pathContains = str => (state.pathname.indexOf(str) >= 0);

  return {
    ...state,
    pathContains
  };
}

export default useLocation;