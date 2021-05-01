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

function useLocation({ reducer = locationReducer, location }) {

  console.log('useLocation', location, location.pathname)
  const [state, updateLocation] = useState(typeof window !== 'undefined' ? window.location.href : '');

  console.log('useLocation', state, state)
  const pathContains = str => {

    console.log('pathContains', str, state, state.indexOf(str) >= 0)

    return (state.indexOf(str) >= 0)
  };

  return {
    ...state,
    pathContains
  };
}

export default useLocation;