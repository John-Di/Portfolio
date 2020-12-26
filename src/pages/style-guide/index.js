import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import Section from '../../sections/section';
import FullWidthSection from '../../sections/full-width-section';
import PageWidthSection from '../../sections/page-width-section';
import FullWidthPaddedSection from '../../sections/full-width-padded-section';
import PageWidthPaddedSection from '../../sections/page-width-padded-section';
import HeroBanner from '../../components/hero-banner';
import TextWithBackground from '../../components/text-with-background';
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
import TextWithMedia from '../../components/text-with-media';
import {
	contentMaker
} from '../../utils/dom-builder';

const generateDummySectionContent = (content_length, k, index) => {
	const NUM_COLS = Math.min(4, content_length);
	let image_first = randomBool(),
		accentColor = randomColor(),
		image = randomImage(randomIntegerEx(0, 10000) + index)
	return (
		<TextWithMedia
			key={`content_${(1 + index) * content_length}`}
			cols={NUM_COLS}
			backgroundColor={`${accentColor}`}
			backgroundImage={`${image}`}
			image_first={`${image_first}`}
			reversed={!!index}
		>
			<h2>This is just a Portfolio of sorts</h2>
			<p>Just for the time being...</p>
		</TextWithMedia>
	)
}

const generateDummyHero = (content_length, k, index) => {
	const NUM_COLS = Math.min(4, content_length);
	let image_first = randomBool(),
		accentColor = randomColor(),
		image = randomImage(randomIntegerEx(0, 10000) + index);

	let Inner = randomBool() ? TextWithBackground : TextWithMedia;
	return (
		<Inner
			key={`content_${(1 + index) * content_length}`}
			cols={NUM_COLS}
			backgroundColor={`${accentColor}`}
			backgroundImage={`${image}`}
			image_first={`${image_first}`}
			reversed={!!index}
		>
			<h2>This is just a Portfolio of sorts</h2>
			<p>Just for the time being...</p>
		</Inner>
	)
}

const generateRandomSectionContent = (length, k, index) => generateSectionContent(randomIntegerIn(2, 4), randomSection(), k, index);
const generateSectionContent = (content_length = randomIntegerIn(2, 4), SectionComponent = randomSection(), k, index) => (<SectionComponent cols={content_length}>{contentMaker(content_length, generateDummySectionContent.bind(this, content_length))}</SectionComponent>);

const generateSections = length => {
	return contentMaker(length, generateRandomSectionContent.bind(this));
}

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

	return (
		<ARTICLE>
			<HeroBanner>
				{
					generateSectionContent(1, generateDummyHero.bind(this, 1))
				}
			</HeroBanner>
			<FullWidthSection>
				{
					generateSectionContent(1, generateDummySectionContent.bind(this, 1))
				}
			</FullWidthSection>
			{generateSections(randomIntegerIn(4, 10))}
			<FullWidthSection>
				{
					generateSectionContent(1, generateDummySectionContent.bind(this, 1))
				}
			</FullWidthSection>
		</ARTICLE>
	)
}
