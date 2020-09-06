import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
	const post = data.markdownRemark
	return (
		<PageLayout>
			<SEO title={post.frontmatter.title} description={post.excerpt} />
			<div
				css={css`
				background: blue;
				height: 100vh;
				width: 100vh;
            `}>
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</PageLayout>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
			excerpt
		}
	}
`
