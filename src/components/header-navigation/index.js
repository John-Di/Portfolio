import {
  arrayToJSXList
} from '../../utils/dom-builder';
import {
  randomColor,
  randomIntegerEx
} from '../../utils/randoms';
import IdealTextColor from '../../utils/IdealTextColor';
import React, {
  useState,
  useRef,
  useEffect,
  Children
} from "react";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {
  NAV,
  UL,
  LI,
  NAVLINK,
  ICON,
  DIV,
  TOGGLE
} from './styles';

const nav = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/resume/",
    label: "Resume"
  },
  {
    href: "/style-guide/",
    label: "Style Guide"
  }
];

let alignment = [
  'flex-start',
  'center',
  'flex-end'
];

const HeaderNavigation = ({ accentColor, children }) => {

  return (
    <NAV>
      {children}
    </NAV>
  )
}

export default HeaderNavigation;