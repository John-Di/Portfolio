import React, { useContext } from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ObjectTile from '../object-tile';
import { size } from '../../utils/variables';
import {
  CARD,
  TITLE,
  IMAGE,
  PRICE,
  BODY,
  FORM
} from './styles';
import AdaptedImage from "../adapted-image";
import LocationContext from "../../contexts/LocationContext";

export default function DesignCard({
  image,
  title,
  products,
  url = "#",
  images
}) {
  const {
    state
  } = useContext(LocationContext);
  console.log('DesignCard', image);


  // const values = options.filter(({ name }) => name.toLowerCase() === 'color').map(({ values }) => values).flat();
  const locationState = {
    ...state,
    product: { title }
    // selectedVariantIndex
  };

  const designImage = {
    url,
    locationState,
    image,
    src: image.url
  }

  return (
    <CARD
      className="product-tile"
      heading={title}
      to={url}
      state={locationState}
    >
      <AdaptedImage {...designImage} />
      <TITLE
        to={url}
      >{title}</TITLE>
    </CARD>
  );
}
