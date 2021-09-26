import { getImage } from "gatsby-plugin-image";
import React, { useContext } from "react";

import {
  THUMBNAIL,
  IMG
} from './styles';

export default function Thumbnail({
  isCurrent = false,
  onClick,
  image,
  alt,
  Image
}) {
  return (
    <THUMBNAIL
      isCurrent={isCurrent}
      onClick={onClick}
      transparency={1 / 3}
    >
      <Image image={getImage(image)} alt={alt} />
    </THUMBNAIL>
  );
}
