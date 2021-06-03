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
import { randomImage } from "../../utils/randoms";

export default function ObjectTile({
  heading,
  backgroundImage,
  image,
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
      <IMAGE
        to={url}
        activeClassName="active"
        partiallyActive={true}
        image={!image ? backgroundImage : undefined}
        state={{
          product: { title: heading }
        }}
      >
        {image && image.localFile ? <Image fixed={image.localFile.childImageSharp.fixed} /> : < img src={randomImage()} />}
      </IMAGE>
      {value}
      {body && <BODY>{body}</BODY>}
      {children}
    </TILE>
  );
}
