import React from "react";
import {
  LAYOUT,
  ITEM
} from './styles';
import { device } from '../../utils/variables';
import { childrenToJSXList } from '../../utils/dom-builder';

const breakpoints = {
  2: [{
    bp: `${device.tablet}`,
    maxWidth: `50%`
  }],
  3: [{
    bp: `${device.tablet}`,
    maxWidth: `${100 / 3}%`
  }],
  4: [{
    bp: `${device.mobileXL} and ${device.max_laptopL}`,
    maxWidth: `50%`
  }, {
    bp: `${device.laptopL}`,
    maxWidth: `25%`
  }]
};

export default function TileRow({ children }) {
  let bp = breakpoints[children.length];
  return (
    <LAYOUT breakpoint={bp && bp.length ? bp[bp.length - 1].bp : null}>
      {childrenToJSXList(children, (tile, i) => (
        <ITEM key={i} breakpoints={bp}>
          {tile}
        </ITEM>
      ))}
    </LAYOUT>
  );
}
