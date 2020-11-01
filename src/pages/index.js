import React from "react"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import PageLayout from "../layouts/resume-layout"

import { rhythm } from "../utils/typography"
import Basics from "../components/resume/basics"
import About from "../components/resume/about"


export default function ResumePage({ data, pageContext }) {
	let { basics } = pageContext.resume;

	return (
		<PageLayout>
			<SEO title={`Resume`} description={basics.name} />
			<Basics data={data} pageContext={pageContext} />
			<About data={data} pageContext={pageContext} />
		</PageLayout>
	)
}
