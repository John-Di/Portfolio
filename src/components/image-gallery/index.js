import React, { useContext } from "react";
import {
  WRAPPER,
  GALLERY,
  MAIN_IMAGE,
  IMG
} from './styles';
import GalleryContext from "../../contexts/GalleryContext";
import ThumbnailNavigation from "../thumbnail-navigation";

export default function ImageGallery({
  gap = 0.75,
  maxWidth = '100%',
  hasPadding = false
}) {
  const {
    Image,
    mainImage
  } = useContext(GalleryContext);

  return (
    <WRAPPER maxWidth={maxWidth} className="image-gallery-wrapper" hasPadding={hasPadding}>
      <GALLERY className="image-gallery">
        <MAIN_IMAGE className="image-gallery__main-image">
          <Image image={mainImage} alt={`gallery main image`} />
        </MAIN_IMAGE>
        <ThumbnailNavigation />
      </GALLERY>
    </WRAPPER>
  );
}
