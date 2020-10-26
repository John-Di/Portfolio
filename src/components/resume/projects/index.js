import React from "react";
import { css } from "@emotion/core";
import Project from "../project";
import CollapsibleSection from "../collapsible-section";

export default function Projects({ data }) {
	const projects = data;
	const label = (<h2>Projects</h2>);

	return (
		<CollapsibleSection label={label} speed={200} triggerStyles={{
			'marginTop': 0,
			'cursor': 'pointer'
		}}>
			<hr />
			{
				projects.map((project, i) => <Project key={`work_${i}`} data={project} />)
					.reduce((acc, curr) => acc === null ? curr : (
						<>
							{acc}
							<br />
							{/* <hr css={css`
								max-width: 50%;
								margin-right: auto;
							`} /> */}
							{curr}
						</>
					), null)
			}
		</CollapsibleSection>
	)
}
