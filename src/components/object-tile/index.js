import React from "react";
import Image from 'gatsby-image'
import {
  TILE,
  IMAGE,
  // TITLE,
  HEADING,
  // SUBHEADING,
  BODY
} from './styles';

export default function ObjectTile({
  heading,
  // subheading,
  image,
  body,
  backgroundImage,
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
      <IMAGE
        to={url}
        activeClassName="active"
        partiallyActive={true}
        image={!image ? backgroundImage : undefined}
        state={{
          product: { title: heading }
        }}
      >
        {image ? <Image fixed={image} /> : undefined}
      </IMAGE>
      {value}
      {body && <BODY>{body}</BODY>}
      {children}
    </TILE>
  );
}
