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
  state,
  value,
  url = '/products/full-strawberry-tee'
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
        state={state}
      >
        {heading}
      </HEADING>
      {value}
      {body && <BODY>{body}</BODY>}
      {children}
    </TILE>
  );
}
