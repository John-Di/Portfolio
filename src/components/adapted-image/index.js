import React from "react";
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import {
  IMAGE
} from './styles';

const images = {
  "strawberry": <StaticImage src={"../../images/designs/strawberry_200x.png"} alt={'strawberry'} />,
  "cookie": <StaticImage src={"../../images/designs/cookie_200x.png"} alt={'Cookie'} />,
  "default": <StaticImage src={"../../images/designs/strawberry_200x.png"} alt={'strawberry'} />,
}

export default function AdaptedLinkImage({ url = "#", image, handle, alt = 'Random Placeholder Image' }) {
  return (
    <IMAGE
    >
      {image && getImage(image) ?
        <GatsbyImage image={getImage(image)} alt={alt} /> :
        images[handle]}
    </IMAGE>
  );
}
