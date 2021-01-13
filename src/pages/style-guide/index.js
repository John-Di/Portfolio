import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import MainLayout from '../../layouts/main-layout';
import TextBanner from '../../sections/text-banner';
import HeroBanner from '../../sections/hero-banner';
import TextBlock from '../../components/text-block';
import TextMediaBlock from '../../components/text-media-block';
import OnePairSection from '../../sections/one-pair-section';
import TwoPairSection from '../../sections/two-pair-section';
import ThreePairSection from '../../sections/three-pair-section';
import FourPairSection from '../../sections/four-pair-section';
import Section from '../../sections/section';
import TextMediaGrid from '../../randoms/text-media-grid';
import FancyCTA from '../../components/fancy-cta';
import ImageGallerySection from '../../sections/image-gallery-section';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomIntegerIn,
	randomBool,
	randomImageArray
} from '../../utils/randoms';
import {
	ARTICLE
} from './styles';

export default function StyleGuide({ pageContext }) {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
				hero: file(base: { eq: "homepage_hero.jpg" }) {
					publicURL
					extension
					name
				}
			}
			`
	);
	let i = 0;
	let heroBannerColor = randomColor();

	return (
		<MainLayout>
			<ARTICLE>
				<HeroBanner
					index={0}
					cols={1}
					backgroundColor={`${heroBannerColor}`}
					text
					backgroundImage={`${randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920)}`}
					image_first={`${randomBool()}`}
					reversed={!!0}
					isEven={0 % 2 === 0}
				>
					<TextBlock>
						<h1>Style Guide</h1>
						<p>Here's a Hero Banner</p>
						<FancyCTA
							parentBackgroundColor={heroBannerColor}
						>Learn More</FancyCTA>
					</TextBlock>
				</HeroBanner>
				<TextBanner
					textAlignment={'center'}
				>
					<h2>Sections and Components</h2>
					<p>Including this Basic Text Banner Section</p>
				</TextBanner>
				<OnePairSection isFullWidth={true} />
				<OnePairSection isFullWidth={false} />
				<TwoPairSection isFullWidth={true} />
				<TwoPairSection isFullWidth={false} />
				<TextBanner
					textAlignment={'center'}
				>
					<h2>Just a little White Space Break</h2>
					<p>Enjoy the Image Gallery</p>
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
					<h2>That's it for now</h2>
					<p>Try Mobile if you haven't already</p>
				</TextBanner>
				<OnePairSection isFullWidth={true} />
			</ARTICLE>
		</MainLayout >
	)
}
