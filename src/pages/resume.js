import React from "react"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import PageLayout from "../components/page-layout"

import { rhythm } from "../utils/typography"
import { useStaticQuery, Link, graphql } from "gatsby"
import Image from "../components/image"

export default function Resume({ data }) {
	const { basics } = data.resumeYaml;
	console.log(basics);

	return (
		<PageLayout>
			<SEO title={`Resume | ${basics.name}`} description={basics.summary} />
			<section css={css`
				margin: 0 auto;
				max-width: 33.3333%;
				padding: ${rhythm(0.5)};
				float: left;
			`}>
				<Image imgName="favicon.png" />
				<h1>{basics.name}</h1>
				<p>{basics.label}</p>
				<p>{basics.name}</p>
				<div
					css={css`
						max-width: 7.5em
					`}>
				</div>
			</section>
			<section css={css`
				margin: 0 auto;
				width: 100%;
				max-width: 66.6667%;
				padding: ${rhythm(0.5)};
				float: left;
			`}>



			</section>
		</PageLayout>
	)
}

export const query = graphql`
	query Resume {
		resumeYaml {
			basics {
				email
				name
				label
				phone
				url
				summary
				profiles {
				network
				url
				username
				}
			}
			work {
				description
				endDate(formatString: "MMM, YYYY")
				highlights
				location
				name
				startDate(formatString: "MMM, YYYY")
				position
				summary
				url
			}
			volunteer {
				endDate(formatString: "MMM, YYYY")
				highlights
				organization
				position
				startDate(formatString: "MMM, YYYY")
				summary
				url
			}
			education {
				area
				courses
				endDate(formatString: "MMM, YYYY")
				gpa
				institution
				startDate(formatString: "MMM, YYYY")
				studyType
			}
			awards {
				awarder
				date(formatString: "MMM, YYYY")
				summary
				title
			}
			publications {
				name
				publisher
				releaseDate(formatString: "MMM, YYYY")
				summary
				url
			}
			skills {
				keywords
				level
				name
			}
			languages {
				fluency
				language
			}
			interests {
				keywords
				name
			}
			references {
				name
				reference
			}
		}
	}
`
