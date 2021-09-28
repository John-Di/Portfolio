import React, { useContext } from "react";
import GalleryContext from "../../contexts/GalleryContext";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import Thumbnail from '../thumbnail';
import {
  LIST,
  ITEM
} from './styles';

export default function ThumbnailGrid({
  gutterOffset = 1.5,
  perRow = 4,

}) {
  const {
    Image,
    updateByVisibleOption,
    isCurrent,
    images = []

  } = useContext(GalleryContext);
  const onClick = (i, e) => {
    e.preventDefault();
    updateByVisibleOption(i);
  };
  console.log('ThumbnailGrid', images)

  const ThumbnailItem = (image, i) => (
    <ITEM key={i} gutter={gutterOffset} maxWidth={perRow ? `${100 / perRow}%` : null}>
      <Thumbnail
        Image={Image}
        isCurrent={isCurrent(i)}
        onClick={onClick.bind(this, i)}
        image={image}
        alt={`Image ${i + 1}`}
      />
    </ITEM>
  );

  return (
    <LIST ref={list => list} gutterOffset={gutterOffset}>
      {arrayToComponentSiblings(images, ThumbnailItem)}
    </LIST>
  );
}
