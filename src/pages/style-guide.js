import * as React from "react";
import TextBanner from '../sections/text-banner';
import HeroBanner from '../sections/hero-banner';
import TextBlock from '../components/text-block';
import ObjectTile from '../components/object-tile';
import FeaturedTiles from '../sections/featured-tiles';
import OnePairSection from '../sections/one-pair-section';
import TwoPairSection from '../sections/two-pair-section';
import ThreePairSection from '../sections/three-pair-section';
import FourPairSection from '../sections/four-pair-section';
import Page from '../layouts/page';
import FancyCTA from '../components/fancy-cta';
import ImageGallerySection from '../sections/image-gallery-section';
import IdealTextColor from '../utils/IdealTextColor';
import {
  randomColor,
  randomImage,
  randomIntegerEx,
  randomBool,
  randomImageArray
} from '../utils/randoms';
import { jsxCloneArray } from '../utils/dom-builder';
import { size } from '../utils/variables';
import StyleGuideArticle from '../components/style-guide-article';

// markup
const StyleGuidePage = () => {
  let accentColor = randomColor();
  let heroWidth = randomBool(1);
  let heroImage = randomBool() ? randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920) : null;

  return (
    <Page
      accentColor={accentColor}
    >
      <StyleGuideArticle>
        <HeroBanner
          index={0}
          cols={1}
          image_first={`${randomBool()}`}
          maxWidth={`${heroWidth ? `100%` : `${size.laptopL}px`}`}
          reversed={!!0}
          isEven={0 % 2 === 0}
        >
          <TextBlock
            overlay={true}
            backgroundColor={`${accentColor}`}
            backgroundImage={heroImage}
          >
            <h1>Style Guide</h1>
            <p>Here's a Hero Banner. It's {heroWidth ? `Full Screen` : `Page Width`}.</p>
            <FancyCTA
              accentColor={accentColor}
              textColor={IdealTextColor(accentColor)}
            >The Buttons Still Do Nothing</FancyCTA>
          </TextBlock>
        </HeroBanner>
        <TextBanner
          textAlignment={'center'}
        >
          <TextBlock
          >
            <h2>Sections and Components</h2>
            <p>Including this Basic Text Banner Section</p>
          </TextBlock>
        </TextBanner>
        <FeaturedTiles>{
          jsxCloneArray(4, (length, _, index) => {
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
        <OnePairSection isFullWidth={true} />
        <OnePairSection isFullWidth={false} />
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
        <TwoPairSection isFullWidth={true} />
        <TwoPairSection isFullWidth={false} />
        <TextBanner
          textAlignment={'center'}
        >
          <TextBlock
          >
            <h2>Just a little White Space Break</h2>
            <p>Enjoy the Image Gallery</p>
          </TextBlock>
        </TextBanner>
        <ImageGallerySection
          images={randomImageArray()}
        />
        <ThreePairSection isFullWidth={true} />
        <ThreePairSection isFullWidth={false} />
        <FeaturedTiles>{
          jsxCloneArray(3, (length, _, index) => {
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
        <FourPairSection isFullWidth={true} />
        <FourPairSection isFullWidth={false} />
        <TextBanner
          textAlignment={'center'}
        >
          <TextBlock
          >
            <h2>That's it for now</h2>
            <p>Try Mobile if you haven't already</p>
          </TextBlock>
        </TextBanner>
        <OnePairSection isFullWidth={true} />
        <FeaturedTiles>{
          jsxCloneArray(1, (length, _, index) => {
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
      </StyleGuideArticle>
    </Page>
  )
}

export default StyleGuidePage;
