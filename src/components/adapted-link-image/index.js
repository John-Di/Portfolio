import React, { useContext } from "react";
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import {
  IMAGE
} from './styles';
import LocationContext from "../../contexts/LocationContext";

const images = {
  "strawberry": <StaticImage src={"../../images/designs/strawberry_200x.png"} alt={'strawberry'} />,
  "cookie": <StaticImage src={"../../images/designs/cookie_200x.png"} alt={'Cookie'} />,
  "default": <StaticImage src={"../../images/designs/strawberry_200x.png"} alt={'strawberry'} />,
}

export default function AdaptedLinkImage({ url = "#", image, handle, alt = 'Random Placeholder Image' }) {

  const {
    state
  } = useContext(LocationContext),
    locationState = {
      ...state
    };
  // console.log('ALI', handle, 'handle', image, getImage(image));
  return (
    <IMAGE
      to={url}
      activeClassName="active"
      partiallyActive={true}
      state={locationState}
    >
      {image && getImage(image) ?
        <GatsbyImage image={getImage(image)} alt={alt} /> :
        images[handle]}
    </IMAGE>
  );
}
