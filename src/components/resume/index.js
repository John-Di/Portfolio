import React from "react";
import SEO from "../../components/seo";
import Basics from "../../components/resume/basics";
import About from "../../components/resume/about";
import ResumeLayout from "../../layouts/resume-layout";


export default function Resume({ data, pageContext }) {
	const { basics } = pageContext.resume;
	return (
		<ResumeLayout>
			<SEO title={`Resume`} description={basics.name} />
			<Basics data={data} pageContext={pageContext} />
			<About data={data} pageContext={pageContext} />
		</ResumeLayout>
	)
}
