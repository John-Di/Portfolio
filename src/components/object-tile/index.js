import React from "react";
import Image from 'gatsby-image';
import {
  TILE,
  IMAGE,
  // TITLE,
  HEADING,
  // SUBHEADING,
  BODY
} from './styles';
import { randomImage } from "../../utils/randoms";

export default function ObjectTile({
  heading,
  body,
  maxWidth,
  children,
  value,
  url = '/products/dummy-product'
}) {
  return (
    <TILE
      className="tile"
      maxWidth={maxWidth}
    >
      <HEADING
        to={url}
        activeClassName="active"
        partiallyActive={true}
      >
        {heading}
      </HEADING>
      {value}
      {body && <BODY>{body}</BODY>}
      {children}
    </TILE>
  );
}
