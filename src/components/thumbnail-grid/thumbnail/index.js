import React, { useContext } from "react";

import {
  THUMBNAIL,
  IMG
} from './styles';

export default function Thumbnail({
  isCurrent = false,
  onClick,
  image
}) {
  return (
    <THUMBNAIL
      isCurrent={isCurrent}
      onClick={onClick}
      transparency={1 / 3}
    >
      <IMG src={image} />
    </THUMBNAIL>
  );
}
