import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import MainLayout from '../../layouts/main-layout';
import TextBanner from '../../sections/text-banner';
import HeroBanner from '../../sections/hero-banner';
import TextBlock from '../../components/text-block';
import TextMediaBlock from '../../components/text-media-block';
import Section from '../../sections/section';
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
	let test = randomColor();
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
				<TextMediaBlock
					backgroundColor={`${test}`}
					backgroundImage={`${randomImage(randomIntegerEx(0, 10000) + 2, 1920, 1920)}`}
				>
					<h2>Text Media Block</h2>
					<p>Just for the time being...</p>
					<FancyCTA
						parentBackgroundColor={test}
					>Learn More</FancyCTA>
				</TextMediaBlock>
				<ImageGallerySection
					images={randomImageArray()}
				/>
				<TextBanner
					textAlignment={'center'}
				>
					<h2>Sections and Components</h2>
					<p>Including this Basic Text Banner Section</p>
				</TextBanner>
				<ImageGallerySection
					images={randomImageArray()}
				>
					<TextBlock overlay={true}>
						<h1>Simple Image Gallery</h1>
						<p>Isn't it cute?</p>
						<FancyCTA>Click me</FancyCTA>
					</TextBlock>
				</ImageGallerySection>
				<TextMediaGrid />
			</ARTICLE>
		</MainLayout >
	)
}
