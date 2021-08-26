import React from "react";
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import {
  IMAGE
} from './styles';
import { randomImage } from "../../utils/randoms";

export default function AdaptedImage({ locationState, url = "#", image, src = randomImage(), alt = 'Random Placeholder Image' }) {

  return (
    <IMAGE
      to={url}
      activeClassName="active"
      partiallyActive={true}
      state={locationState}
    >
      {getImage(image) ?
        <GatsbyImage image={getImage(image)} alt={alt} /> :
        <StaticImage src={src} alt={alt} />}
    </IMAGE>
  );
}
