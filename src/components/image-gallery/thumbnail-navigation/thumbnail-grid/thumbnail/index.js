import React, { useContext } from "react";
import GalleryContext from "../../../../../contexts/GalleryContext";

import {
  THUMBNAIL,
  IMG
} from './styles';

export default function Thumbnail({
  index = -1,
  image
}) {
  const {
    updateIndex,
    isCurrent
  } = useContext(GalleryContext),
    onClick = e => {
      e.preventDefault();
      updateIndex(index);
    };

  return (
    <THUMBNAIL
      isCurrent={isCurrent(index)}
      onClick={onClick}
      transparency={1 / 3}
    >
      <IMG src={image} />
    </THUMBNAIL>
  );
}
