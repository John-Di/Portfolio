import React from "react";
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
  // image,
  body,
  backgroundImage,
  // backgroundColor,
  children,
  value,
  url = '/product/dummy-product'
}) {
  return (
    <TILE
      className="tile"
    >
      <HEADING
        to={url}
        activeClassName="active"
      >
        {heading}
      </HEADING>
      <IMAGE
        to={url}
        activeClassName="active"
        backgroundImage={backgroundImage}
        isSquare={true}
        state={{
          product: { title: heading }
        }}
      ></IMAGE>
      {value}
      {body && <BODY>{body}</BODY>}
      {children}
    </TILE>
  );
}
