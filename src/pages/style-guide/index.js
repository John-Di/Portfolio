import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import Section from '../../sections/section';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomIntegerIn,
	returnBool
} from '../../utils/randoms';
import {
	ARTICLE
} from './styles';
import TextWithMedia from '../../components/text-with-media';
import {
	contentMaker,
	reduceJSXList
} from '../../utils/dom-builder';

const generateDummyElement = (content_length, k, index) => {
	const NUM_COLS = Math.min(4, content_length);
	console.log(content_length, index);
	let image_first = returnBool(),
		accentColor = randomColor(),
		image = randomImage(randomIntegerEx(0, 10000) + index)
	console.log(image_first, index);
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

const generateSectionContent = (length, k, index) => {
	let content_length = randomIntegerIn(2, 4);
	return (
		<Section maxWidth={'100%'} hasPadding={false}>
			{contentMaker(content_length, generateDummyElement.bind(this, content_length))}
		</Section>
	)
};

const generateSections = length => contentMaker(length, generateSectionContent.bind(this));

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
			{generateSectionContent(1)}
			{generateSections(randomIntegerIn(4, 10))}
			{generateSectionContent(1)}
		</ARTICLE>
	)
}
