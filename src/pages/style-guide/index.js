import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import MainLayout from '../../layouts/main-layout';
import TextBanner from '../../sections/text-banner';
import HeroBanner from '../../sections/hero-banner';
import TextBlock from '../../components/text-block';
import TextMediaGrid from '../../sections/randoms/text-media-grid';
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
	let imageArray = randomImageArray();
	console.log('randomImageArray', imageArray);

	return (
		<MainLayout>
			<ARTICLE>
				<HeroBanner
					index={0}
					cols={1}
					backgroundColor={`${heroBannerColor}`}
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
				<TextMediaGrid />
				<ImageGallerySection
					images={imageArray}
				/>
				<TextMediaGrid />
				<TextMediaGrid />
				<TextMediaGrid />
				<TextMediaGrid />
				<TextMediaGrid />
				<TextMediaGrid />
				<TextMediaGrid />
			</ARTICLE>
		</MainLayout >
	)
}
