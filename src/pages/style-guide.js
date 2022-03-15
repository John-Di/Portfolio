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
import CollectionPage from "../layouts/collection-page";


// export const query = graphql`
//   {
//     allShopifyProduct {
//       edges {
//         node {
//           title
//           tags
//           productType
//           id
//           handle
//           availableForSale
//           description
//           images {
//             originalSrc
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(width: 800, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
//                 id
//               }
//             }
//           }
//           options {
//             name
//             values
//           }
//           variants {
//             selectedOptions {
//               name
//               value
//             }
//             priceV2 {
//               amount
//             }
//             price
//             id
//             shopifyId
//             title
//             sku
//             availableForSale
//             compareAtPrice
//             compareAtPriceV2 {
//               currencyCode
//               amount
//             }
//             image {
//               originalSrc
//               id
//               localFile {
//                 url
//                 childImageSharp {
//                   gatsbyImageData(width: 800, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
//                   id
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// markup
const StyleGuidePage = ({ location = {}, data }) => {
  // let accentColor = randomColor();
  // let heroWidth = randomBool(1);
  // let heroImage = randomBool() ? randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920) : null;

  // const featured_products = data.allShopifyProduct.edges.filter((_, i) => i < 4).map(({ node }) => {
  //   const ids = node.variants.map(({ image }) => image.localFile.childImageSharp.id),
  //     images = node.variants.map(({ image }) => image.localFile).filter(
  //       ({ childImageSharp }, index) => ids.indexOf(childImageSharp.id) === index);

  //   return {
  //     ...node,
  //     images,
  //     url: `/products/${node.handle}`,
  //     variants: node.variants.map(({ image, ...variant }) => ({
  //       image: image.localFile,
  //       ...variant
  //     }))
  //   }
  // });

  return (
    <h1>Style Guide</h1>
    // <ShopPageTemplate
    //   accentColor={accentColor}
    //   hasCart={true}
    //   location={location}
    // >
    //   <StyleGuideArticle>
    //     <CollectionPage products={featured_products} />
    //   </StyleGuideArticle>
    // </ShopPageTemplate>
  )
}

export default StyleGuidePage;
