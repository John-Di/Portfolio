import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import Section from '../../sections/section';
import {
	ARTICLE,
	CONTAINER,
	CONTENT
} from './styles';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomIntegerIn,
	returnBool
} from '../../utils/randoms';
import {
	contentMaker
} from '../../utils/dom-builder';


let dummyJSX = (content_length, k, index) => {
	const NUM_COLS = Math.min(4, content_length);
	console.log(content_length, index);
	let image = randomImage(content_length + index + randomIntegerEx(0, 10000)),
		color = randomColor(),
		image_first = returnBool();
	console.log(image_first, index);
	return (
		<CONTAINER
			key={`content_${(1 + index) * content_length}`}
			cols={NUM_COLS}
			bkcolor={`${color}`}
			bkimage={`${image}`}
			image_first={`${image_first}`}
			reversed={!!index}
		>
			<CONTENT withMedia={!!image}>
				<h2 style={{}}>This is just a Portfolio of sorts</h2>
				<p>Just for the time being...</p>
			</CONTENT>
		</CONTAINER>
	)
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
			<Section
				hasPadding={false}
			>
				{contentMaker(1, dummyJSX)}
			</Section>
			{
				contentMaker(randomIntegerIn(3, 10), (length, n, i) => {
					return (
						<Section
							maxWidth={'1440px'}
							hasPadding={false}
						>
							{
								contentMaker(
									randomIntegerEx(2, 5),
									dummyJSX
								)
							}
						</Section>
					)
				})
			}
			{/* <Section
				maxWidth={'1440px'}
				hasPadding={false}
			>
				{
					contentMaker(
						randomIntegerEx(2, 4),
						dummyJSX
					)
				}
			</Section>
			<Section
			>
				{
					contentMaker(
						randomIntegerEx(2, 4),
						dummyJSX
					)
				}
			</Section> */}
			<Section
				maxWidth={'1440px'}
			>
				{contentMaker(1, dummyJSX)}
			</Section>
		</ARTICLE>
	)
}
