import React from "react"
import styled from 'styled-components';
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import ResumeLayout from '../layouts/resume-layout';
import Basics from "../components/resume/basics";
import About from "../components/resume/about";
import Career from "../components/resume/career";
import Projects from "../components/resume/projects";
import Education from "../components/resume/education";

export default function ResumeTemplate({ pageContext: { resume } }) {
	const {
		basics,
		skills,
		projects,
		work,
		education
	} = resume;

	const Resume = styled.section`
		background: white;
		margin: 0;
		margin-left: auto;
		width: 100%;
		max-width: calc(100% - 32em);
		padding: ${rhythm(1.5)} ${rhythm(1.5)};
		border-radius: 1em;
	`;

	return (
		<ResumeLayout>
			<SEO title={`Resume`} description={basics.name} />
			<Basics data={{ basics, skills }} />

			<Resume>
				<About data={basics} />
				<Projects data={projects} />
				<Career data={work} />
				<Education data={education} />
			</Resume>
		</ResumeLayout>
	)
}
