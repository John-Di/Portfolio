import * as React from "react";
import Page from '../page';
import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool,
  randomImageArray
} from '../../utils/randoms';
import { size } from '../../utils/variables';
import ImageGallery from "../../components/image-gallery";
import {
  ARTICLE,
  TITLE,
  MEDIA,
  PRICE
} from './styles';


// markup
const ProductPage = ({ title, price, images = randomImageArray() }) => {
  let accentColor = randomColor();

  return (
    <Page
      accentColor={accentColor}
    >
      <ARTICLE>
        <TITLE>{title}</TITLE>
        <MEDIA>
          <ImageGallery maxWidth={`75%`} images={images} gap={0} />
        </MEDIA>
        <PRICE>{price}</PRICE>
      </ARTICLE>
    </Page>
  )
}

export default ProductPage;
