import React, { useContext } from "react";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import Thumbnail from '../thumbnail';
import {
  LIST,
  ITEM
} from './styles';
import GalleryContext from "../../contexts/GalleryContext";

export default function ThumbnailGrid({
  gutterOffset = 1.5,
  perRow = 4
}) {
  const {
    images
  } = useContext(GalleryContext);

  const WrapElement = (image, i) => (
    <ITEM key={i} gutter={gutterOffset} maxWidth={perRow ? `${100 / perRow}%` : null}>
      <Thumbnail index={i} image={image} />
    </ITEM>
  );

  return (
    <LIST ref={list => list} gutterOffset={gutterOffset}>
      {arrayToComponentSiblings(images, WrapElement)}
    </LIST>
  );
}
