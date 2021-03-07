import React, { useState } from "react";
import TileList from "../../layouts/tile-list";
import { jsxCloneArrayToJSX } from '../../utils/dom-builder';
import HorizontalScrollable from "../horizontal-scrollable";
import {
  WRAPPER,
  GALLERY,
  MAIN_IMAGE,
  NAVIGATION,
  THUMBNAIL,
  IMG
} from './styles';

export default function ImageGallery({ gap = 0.25, maxWidth = '100%', images = [], scroll = true, hasPadding = false }) {
  const [index, setIndex] = useState(0);

  const ThumbnailElement = (image, i) => (
    <THUMBNAIL
      className={`image-gallery__thumbnail ${index === i ? `current` : ``}`}
      scroll={scroll}
      transparency={1 / 3}
      onClick={() => setIndex(i)}
      maxWidth={100 / Math.min(images.length, 5)}
      gap={gap}
      key={i}
    >
      <IMG src={image} />
    </THUMBNAIL>
  );

  return (
    <WRAPPER maxWidth={maxWidth} className="image-gallery-wrapper" hasPadding={hasPadding}>
      <GALLERY className="image-gallery">
        <MAIN_IMAGE className="image-gallery__main-image">
          <IMG src={images[index]} />
        </MAIN_IMAGE>
        <HorizontalScrollable gap={1.25 / 2}>
          <NAVIGATION className="image-gallery__navigation" maxWidth={maxWidth}>
            <TileList gutterOffset={1.25} items={images} itemMap={ThumbnailElement} />
          </NAVIGATION>
        </HorizontalScrollable>
      </GALLERY>
    </WRAPPER>
  );
}
