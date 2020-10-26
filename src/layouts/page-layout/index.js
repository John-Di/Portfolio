import React from "react"
import { css } from "@emotion/core"
// import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../../utils/typography"
// import Navigation from "./navigation"

export default function PageLayout({ children }) {
	// const data = useStaticQuery(
	// 	graphql`
	// 		query {
	// 			site {
	// 				siteMetadata {
	// 					title
	// 				}
	// 			}
	// 		}
	// 		`
	// )
	return (
		<div
			css={css`
				margin: 0 auto;
				max-width: 1440px;
				padding: ${rhythm(2)};
				padding-top: ${rhythm(1.5)};
			`}
		>
			{children}
		</div>
	)
}
