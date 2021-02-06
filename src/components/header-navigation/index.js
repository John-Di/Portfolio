import React, {
} from "react";
import {
  NAV
} from './styles';

// let alignment = [
//   'flex-start',
//   'center',
//   'flex-end'
// ];

const HeaderNavigation = ({ children }) => {

  return (
    <NAV>
      {children}
    </NAV>
  )
}

export default HeaderNavigation;