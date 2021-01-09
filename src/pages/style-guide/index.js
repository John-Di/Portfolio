import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import MainLayout from '../../layouts/main-layout';
import Grid from '../../layouts/grid';
import Section from '../../sections/section';
import TextBanner from '../../sections/text-banner';
import HeroBanner from '../../sections/hero-banner';
import TextBlock from '../../components/text-block';
import TextMediaBlock from '../../components/text-media-block';
import TextMediaGrid from '../../sections/randoms/text-media-grid';
import FancyCTA from '../../components/fancy-cta';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomIntegerIn,
	randomBool,
	randomSection
} from '../../utils/randoms';
import {
	ARTICLE
} from './styles';
import PaddedSection from "../../sections/padded-section";
import PageWidthSection from "../../sections/page-width-section";
import PageWidthPaddedSection from "../../sections/page-width-padded-section";

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
					backgroundImage={`${randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920)}`}
					image_first={`${randomBool()}`}
					reversed={!!0}
					isEven={0 % 2 == 0}
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
