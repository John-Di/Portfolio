import * as React from "react";
import TextBanner from '../sections/text-banner';
import HeroBanner from '../sections/hero-banner';
import TextBlock from '../components/text-block';
import OnePairSection from '../sections/one-pair-section';
import TwoPairSection from '../sections/two-pair-section';
import ThreePairSection from '../sections/three-pair-section';
import FourPairSection from '../sections/four-pair-section';
import Header from '../components/header';
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
import { size } from '../utils/variables';
import StyleGuideArticle from '../components/style-guide-article';

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  position: "relative"
}

let alignment = [
  'flex-start',
  'center',
  'flex-end'
];

// markup
const StyleGuidePage = () => {
  let accentColor = randomColor();
  let heroWidth = randomBool(1);
  let heroImage = randomBool() ? randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920) : null;

  return (
    <>
      <Header
        accentColor={accentColor}
        whiteOnHover={!!heroImage}
        desktopNavAlignment={alignment[randomIntegerEx(0, alignment.length)]}
      />
      <main style={pageStyles}>
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
                textColor={IdealTextColor(accentColor)}
              >Learn More</FancyCTA>
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
          <OnePairSection isFullWidth={true} />
          <OnePairSection isFullWidth={false} />
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
        </StyleGuideArticle>
      </main>
    </>
  )
}

export default StyleGuidePage;
