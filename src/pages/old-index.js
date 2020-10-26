import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import PageLayout from "../layouts/page-layout"
import Hero from "../components/hero/hero"
import Image from "../components/image"
import Navigation from "../components/navigation"

export default function Home({ data }) {
	return (
		<>
			<Hero imgSrc={data.hero.publicURL}>
				<PageLayout>
					<Navigation />
					<h1>Hi, I'm John Di Girolamo</h1>
					<p>Welcome to my Site</p>
					<p>Powered by Gatsby</p>
					<div
						css={css`
							max-width: 7.5em
						`}>
						<Image imgName={fileNameExtension(data.profile)} />
					</div>
				</PageLayout>
			</Hero>
		</>
	)
}

function fileNameExtension(file) {
	return file.name + '.' + file.extension;
}

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
		hero: file(base: { eq: "homepage_hero.jpg" }) {
			publicURL
			extension
			name
		}
		profile: file(base: { eq: "favicon.png" }) {
			publicURL
			extension
			name
		}
	}
`
