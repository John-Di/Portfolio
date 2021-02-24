import React, {
  // useState
} from "react";
import PageTemplate from '../../templates/page';
import {
  randomColor,
  randomImageArray
} from '../../utils/randoms';
import { size } from '../../utils/variables';
import {
  componentsListToSiblings
} from '../../utils/dom-builder';
import ImageGallery from "../../components/image-gallery";
import FancyCTA from '../../components/fancy-cta';
import { OptionSelector } from './helpers';
import {
  ARTICLE,
  TITLE,
  MEDIA,
  PRICE,
  PRICING,
  DESCRIPTION,
  FORM,
  CTA
} from './styles';


// markup
const ProductPage = ({ title, price, images = randomImageArray(), description, options = [], variants = [], selectedID }) => {
  // const [variantID, SetVariantId] = useState(selectedID);
  let accentColor = randomColor();

  return (
    <PageTemplate
      accentColor={accentColor}
      activeHeader={true}
    >
      <ARTICLE>
        <TITLE>{title}</TITLE>
        <MEDIA>
          <ImageGallery maxWidth={`75%`} images={images} gap={0} />
        </MEDIA>
        <PRICING>
          <PRICE>{price}</PRICE>
        </PRICING>
        <DESCRIPTION>{description}</DESCRIPTION>
        <FORM>
          {
            componentsListToSiblings(options, OptionSelector)
          }
          <CTA>
            <FancyCTA
              type="submit"
              backgroundColor={`#FFFFFF`}
              textColor={`#000000`}
              maxWidth={`${size.mobileXL / 16}em`}
            >Add to Cart</FancyCTA>
          </CTA>
        </FORM>
      </ARTICLE>
    </PageTemplate>
  )
}

export default ProductPage;
