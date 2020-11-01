import React from "react";
import { SECTION } from './styles';
import Summary from "../summary"
import Career from "../career"
import Projects from "../projects"
import Education from "../education"

export default function About({ data, pageContext }) {
	const {
		basics,
		projects,
		work,
		education
	} = pageContext.resume;

	return (
		<SECTION>
			<Summary data={basics} />
			<Projects data={projects} />
			<Career data={work} />
			<Education data={education} />
		</SECTION>
	)
}
