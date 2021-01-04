import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import {
	GRID,
	ITEM
} from './styles';
import background from '../../images/homepage_hero.jpg';

// import Navigation from "./navigation"

const GENERATE_GRID = items => items.reduce((acc, curr, i) => (
	<>
		{acc}
		<ITEM key={i} cols={items.length}>
			{curr}
		</ITEM>
	</>
), <></>)

const cloneElement = (child, index) => React.cloneElement(child, {
	isEven: !(index % 2)
})

export default function Grid({ children }) {

	let items = React.Children.map(children, cloneElement);

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

	let num_col = Math.min(items.length, 4);
	return (
		<GRID cols={num_col}>{GENERATE_GRID(items)}</GRID>
	);
}
