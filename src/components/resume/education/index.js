import React from "react";
import { css } from "@emotion/core";
import DegreeEntry from "../degree";
import CollapsibleSection from "../collapsible-section";

export default function Education({ data }) {
	const education = data;
	const label = (<h2>Education</h2>);

	return (
		<CollapsibleSection label={label} speed={200} triggerStyles={{
			'marginTop': 0,
			'cursor': 'pointer'
		}}>
			<hr />
			{
				education.map((entry, i) => <DegreeEntry key={`work_${i}`} data={entry} />)
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
