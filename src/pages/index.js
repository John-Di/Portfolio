import React from "react"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import PageLayout from "../layouts/resume-layout"

import { rhythm } from "../utils/typography"
import Basics from "../components/resume/basics"
import About from "../components/resume/about"
import Work from "../components/resume/work"
import Projects from "../components/resume/projects"
import Education from "../components/resume/education"


export default function ResumePage({ data, pageContext }) {
	const {
		basics,
		skills,
		projects,
		work,
		education
	} = data.resumeYaml;
	console.log(pageContext.resume);

	return (
		<PageLayout>
			<SEO title={`Resume`} description={basics.name} />
			<Basics data={{ basics, skills }} />

			<section css={css`
				background: white;
				margin: 0;
				margin-left: auto;
				width: 100%;
				max-width: calc(100% - 32em);
				padding: ${rhythm(1.5)} ${rhythm(1.5)};
				border-radius: 1em;
			`}>
				<About data={basics} />
				<Projects data={projects} />
				<Work data={work} />
				<Education data={education} />
			</section>
		</PageLayout>
	)
}
