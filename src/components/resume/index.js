import React from "react";
import YAMLData from "../../../resume/resume.yaml";
import SEO from "../../components/seo";
import Basics from "../../components/resume/basics";
import About from "../../components/resume/about";
import ResumeLayout from "../../layouts/resume-layout";


export default function Resume({ data = YAMLData, pageContext }) {
	let resume = YAMLData;

	if ('basics' in pageContext) {
		resume = pageContext;
	}

	const { basics } = resume;

	return (
		<ResumeLayout>
			<SEO title={`Resume`} description={basics.name} />
			<Basics data={data} resume={resume} />
			<About data={data} resume={resume} />
		</ResumeLayout>
	)
}
