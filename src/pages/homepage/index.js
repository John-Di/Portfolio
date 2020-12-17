import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import Section from '../../components/section';
import background from '../../images/homepage_hero.jpg';
import {
	randomColor
} from '../../utils/random-colors';
import {
	ARTICLE,
	CONTAINER
} from './styles';

export default function Homepage({ pageContext }) {
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

	const contentMaker = content_length => {
		return Array.from({ length: content_length }, (k, i) => {
			let background = randomColor();
			console.log(background);
			const NUM_COLS = Math.min(4, content_length);
			return (
				<CONTAINER key={`content_${i}`} cols={NUM_COLS} bkcolor={`${background}`}>
					<h2 style={{}}>This is just a Portfolio of sorts</h2>
					<p>Just for the time being...</p>
				</CONTAINER>
			)
		}).reduce((acc, curr) => acc === null ? curr : (
			<>
				{acc}
				{curr}
			</>
		), null)
	};

	return (
		<ARTICLE>
			<Section
				hasPadding={false}
			>
				{contentMaker(1)}
			</Section>
			<Section
				maxWidth={'1440px'}
				hasPadding={false}
			>
				{contentMaker(Math.floor(Math.random() * 3) + 1)}
			</Section>
			<Section
			>
				{contentMaker(Math.floor(Math.random() * 3) + 1)}
			</Section>
			<Section
				maxWidth={'1440px'}
			>
				{contentMaker(1)}
			</Section>
		</ARTICLE>
	)
}
