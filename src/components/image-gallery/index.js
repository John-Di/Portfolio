import React, { useContext } from "react";
import {
  WRAPPER,
  GALLERY,
  MAIN_IMAGE,
  IMG
} from './styles';
import GalleryContext from "../../contexts/GalleryContext";
import ThumbnailNavigation from "../thumbnail-navigation";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ImageGallery({
  gap = 0.75,
  maxWidth = '100%',
  hasPadding = false
}) {

  const gallery = useContext(GalleryContext), {
    Image,
    images = [],
    mainImage,
  } = gallery;

  return (
    <WRAPPER maxWidth={maxWidth} className="image-gallery-wrapper" hasPadding={hasPadding}>
      <GALLERY className="image-gallery">
        <MAIN_IMAGE className="image-gallery__main-image">
          <GatsbyImage aspectRatio={1} image={mainImage} alt={`gallery main image`} fit={"contain"} />
        </MAIN_IMAGE>
        {images.length > 1 && <ThumbnailNavigation />}
      </GALLERY>
    </WRAPPER>
  );
}
