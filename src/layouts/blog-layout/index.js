import React from "react"
import { css } from "@emotion/core"
// import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Navigation from "./navigation"
export default function BlogLayout({ children }) {
	// const data = useStaticQuery(
	// 	graphql`
	//   query {
	//     site {
	//       siteMetadata {
	//         title
	//       }
	//     }
	//   }
	// `
	// )
	return (
		<div
			css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: 2.625em;
        padding-top: 1.96875em;
      `}
		>
			<Navigation />
			{children}
		</div>
	)
}
