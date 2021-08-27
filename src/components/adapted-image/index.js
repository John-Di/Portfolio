import React from "react";
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import {
  IMAGE
} from './styles';

const images = {
  "strawberry": <StaticImage src={"../../images/designs/strawberry_200x.png"} alt={'strawberry'} />,
  "cookie": <StaticImage src={"../../images/designs/cookie_200x.png"} alt={'strawberry'} />,
  "default": <StaticImage src={"../../images/designs/strawberry_200x.png"} alt={'strawberry'} />,
}

function getStaticImage(handle = 'default') {
  return images[handle];
};

export default function AdaptedImage({ locationState, url = "#", image, handle, alt = 'Random Placeholder Image' }) {

  return (
    <IMAGE
      to={url}
      activeClassName="active"
      partiallyActive={true}
      state={locationState}
    >
      {getImage(image) ?
        <GatsbyImage image={getImage(image)} alt={alt} /> :
        getStaticImage(handle)}
    </IMAGE>
  );
}
