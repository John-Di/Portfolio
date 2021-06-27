import React, { useContext } from "react";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import Thumbnail from './thumbnail';
import {
  LIST,
  ITEM
} from './styles';
import GalleryContext from "../../contexts/GalleryContext";
import { getImage } from "gatsby-plugin-image";

export default function ThumbnailGrid({
  gutterOffset = 1.5,
  perRow = 4
}) {
  const {
    Image,
    updateByVisibleOption,
    isCurrent,
    images,
    index
  } = useContext(GalleryContext)

  const WrapElement = (image, i) => (
    <ITEM key={i} gutter={gutterOffset} maxWidth={perRow ? `${100 / perRow}%` : null}>
      <Thumbnail
        isCurrent={isCurrent(i)}
        onClick={e => {
          e.preventDefault();
          updateByVisibleOption(i);
        }}
        image={image}
      >
        <Image image={getImage(image)} alt={`thumbnail ${i}`} />
      </Thumbnail>
    </ITEM>
  );

  return (
    <LIST ref={list => list} gutterOffset={gutterOffset}>
      {arrayToComponentSiblings(images, WrapElement)}
    </LIST>
  );
}
