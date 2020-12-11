import React from "react";
import Project from "../project";
import Section from "../section";

export default function Projects({ data }) {
	const projects = data;

	return (
		<Section
			heading={`Projects`}
			className={'Collapsible--projects'}
		>
			{
				projects
					.map((project, i) => <Project key={`project_${i}`} data={project} />)
					.reduce((acc, curr) => acc === null ? curr : (
						<>
							{acc}
							{curr}
						</>
					), null)
			}
		</Section>
	)
}
