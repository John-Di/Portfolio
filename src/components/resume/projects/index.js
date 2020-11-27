import React from "react";
import { css } from "@emotion/core";
import Project from "../project";
import CollapsibleSection from "../../collapsible-section";
import {
	HEADING,
	HR
} from './styles';

export default function Projects({ data }) {
	const projects = data;
	const label = (<HEADING>Projects</HEADING>);

	return (
		<CollapsibleSection label={label} speed={200} triggerStyles={{
			'marginTop': 0,
			'cursor': 'pointer'
		}}>
			<HR />
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
