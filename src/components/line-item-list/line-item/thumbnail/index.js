import React, { useContext } from "react";

import {
  THUMBNAIL,
  IMG
} from './styles';

export default function Thumbnail({
  image
}) {
  return (
    <THUMBNAIL>
      <IMG src={image} />
    </THUMBNAIL>
  );
}
