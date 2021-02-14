import React, { Children } from "react";
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
    bp: `${device.mobileXL}`,
    maxWidth: `50%`
  }, {
    bp: `${device.laptop}`,
    maxWidth: `25%`
  }]
};

export default function TileRow({ children }) {
  console.log('TileRow', Children.map(children, child => React.cloneElement(child)).length);
  return (
    <LAYOUT>
      {childrenToJSXList(children, (tile, i) => (
        <ITEM key={i} breakpoints={breakpoints[children.length]}>
          {tile}

        </ITEM>
      ))}
    </LAYOUT>
  );
}
