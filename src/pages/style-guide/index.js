import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import Section from '../../sections/section';
import FullWidthSection from '../../sections/full-width-section';
import PageWidthSection from '../../sections/page-width-section';
import FullWidthPaddedSection from '../../sections/full-width-padded-section';
import PageWidthPaddedSection from '../../sections/page-width-padded-section';
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

const generateDummyElement = (content_length, k, index) => {
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

const generateRandomSectionContent = (length, k, index) => {
	let content_length = randomIntegerIn(2, 4);
	let SectionComponent = randomSection();
	return (<SectionComponent>{contentMaker(content_length, generateDummyElement.bind(this, content_length))}</SectionComponent>);
};

const generateSectionContent = (length, SectionComponent = randomSection(), k, index) => {
	let content_length = randomIntegerIn(2, 4);
	return (<SectionComponent>{contentMaker(content_length, generateDummyElement.bind(this, content_length))}</SectionComponent>);
};

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
			<FullWidthSection>
				{
					generateSectionContent(1, generateDummyElement.bind(this, 1, FullWidthSection))
				}
			</FullWidthSection>
			{generateSections(randomIntegerIn(4, 10))}
			<FullWidthSection>
				{
					generateSectionContent(1, generateDummyElement.bind(this, 1, FullWidthSection))
				}
			</FullWidthSection>
		</ARTICLE>
	)
}
