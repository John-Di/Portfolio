import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import { Layout } from './styles';
import background from '../../images/homepage_hero.jpg';

// import Navigation from "./navigation"

export default function ResumeLayout({ children }) {
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
		<Layout background={withPrefix(data.hero.publicURL ? data.hero.publicURL : background)}>
			{children}
		</Layout>
	)
}
