import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import Section from '../../sections/section';
import {
	contentMaker
} from '../../utils/randoms';
import {
	ARTICLE,
	CONTAINER,
	CONTENT
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

	return (
		<ARTICLE>
			<Section
				hasPadding={false}
			>
				{contentMaker(1, CONTAINER, CONTENT)}
			</Section>
			<Section
				maxWidth={'1440px'}
				hasPadding={false}
			>
				{
					contentMaker(
						Math.floor(Math.random() * 2) + 2,
						CONTAINER,
						CONTENT
					)
				}
			</Section>
			<Section
			>
				{
					contentMaker(
						Math.floor(Math.random() * 2) + 2,
						CONTAINER,
						CONTENT
					)
				}
			</Section>
			<Section
				maxWidth={'1440px'}
			>
				{contentMaker(1, CONTAINER, CONTENT)}
			</Section>
		</ARTICLE>
	)
}
