import * as React from "react";
import { graphql } from 'gatsby';
import TextBanner from '../sections/text-banner';
import HeroBanner from '../sections/hero-banner';
import TextBlock from '../components/text-block';
import ObjectTile from '../components/object-tile';
import ProductTile from '../components/product-tile';
import FeaturedTiles from '../sections/featured-tiles';
import OnePairSection from '../sections/one-pair-section';
import TwoPairSection from '../sections/two-pair-section';
import ThreePairSection from '../sections/three-pair-section';
import FourPairSection from '../sections/four-pair-section';
import PageTemplate from '../templates/page';
import ChicCTA from '../components/chic-cta';
import ImageGallerySection from '../sections/image-gallery-section';
import BasicContrast from '../utils/BasicContrast';
import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool,
  randomImageArray
} from '../utils/randoms';
import { arrayToComponentSiblings, jsxCloneArray } from '../utils/dom-builder';
import { size } from '../utils/variables';
import StyleGuideArticle from '../components/style-guide-article';
import ShopPageTemplate from "../templates/shop-page";


export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        title
        description
        id
        handle
        variants {
          shopifyId
          priceV2 {
            amount
            currencyCode
          }
        }
        images {
          localFile {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

// markup
const StyleGuidePage = ({ location = {}, data }) => {
  let accentColor = randomColor();
  let heroWidth = randomBool(1);
  let heroImage = randomBool() ? randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920) : null;

  let featured_products = data.allShopifyProduct.nodes.filter((_, i) => i < 4);
  return (
    <ShopPageTemplate
      accentColor={accentColor}
      hasCart={true}
      location={location}
    >
      <StyleGuideArticle>
        <FeaturedTiles heading={`Product Tiles`} items={featured_products} />
        <FeaturedTiles>{
          jsxCloneArray(2, (length, _, index) => {
            return (
              <ObjectTile
                key={index}
                heading={`Tile ${index + 1}`}
                backgroundImage={randomImage(randomIntegerEx(0, 10000) + index, +size.mobileXL, +size.mobileXL)}
                body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
              >
              </ObjectTile>
            )
          })}
        </FeaturedTiles>
        <ImageGallerySection
          images={randomImageArray()}
        />
      </StyleGuideArticle>
    </ShopPageTemplate>
  )
}

export default StyleGuidePage;
