import React from "react";
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
  backgroundColor
}) {
  return (
    <TILE
      className="tile"
    >
      <IMAGE
        backgroundImage={backgroundImage}
        isSquare={true}
      ></IMAGE>
    </TILE>
  );
}
