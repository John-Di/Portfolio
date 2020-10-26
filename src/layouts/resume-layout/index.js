import React from "react";
import styled from 'styled-components';
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import { Layout } from './styles';

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

	const LayoutWithBackground = styled(Layout)`
		&::before {
			background-image: url(${withPrefix(data.hero.publicURL)});
		}
	`;
	return (
		<LayoutWithBackground>
			{children}
		</LayoutWithBackground>
	)
}
