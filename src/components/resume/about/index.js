import React from "react";
import Summary from "../summary";
import Career from "../career";
import Projects from "../projects";
import Education from "../education";
import { SECTION } from './styles';

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
