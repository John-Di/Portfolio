import React, { Children } from "react";
import {
  TILE,
  IMAGE,
  HEADING,
  SUBHEADING,
  BODY
} from './styles';

export default function ObjectTile({
  heading,
  subheading,
  image,
  body,
  backgroundImage,
  backgroundColor,
  children
}) {
  return (
    <TILE
      className="tile"
    >
      <HEADING>{heading}</HEADING>
      <IMAGE
        backgroundImage={backgroundImage}
        isSquare={true}
      ></IMAGE>
      {body && <BODY>{body}</BODY>}
    </TILE>
  );
}
