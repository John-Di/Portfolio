import React from "react"
import { css } from "@emotion/core"
import Homepage from '../../components/homepage';

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
		<Homepage />
	)
}
