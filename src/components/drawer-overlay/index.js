import React, { useContext } from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ObjectTile from '../object-tile';
import { size } from '../../utils/variables';
import {
  DRAWER,
  CONTENT
} from './styles';

export default function DrawerOverlay({
  children,
  collapsibleRef,
  isExpanded
}) {
  return (
    <DRAWER
      ref={collapsibleRef}
      isExpanded={isExpanded}
    >

      <CONTENT
        isExpanded={isExpanded}
      >
        {children}
      </CONTENT>
    </DRAWER>
  );
}
