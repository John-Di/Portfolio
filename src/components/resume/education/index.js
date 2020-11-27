import React from "react";
import DegreeEntry from "../degree";
import CollapsibleSection from "../../collapsible-section";
import {
	HEADING,
	HR,
	DEGREES
} from './styles';

export default function Education({ data }) {
	const education = data;
	const label = (<HEADING>Education</HEADING>);

	return (
		<CollapsibleSection label={label} speed={200} triggerStyles={{
			'marginTop': 0,
			'cursor': 'pointer'
		}}>
			<DEGREES>
				{
					education.map((entry, i) => <DegreeEntry key={`work_${i}`} data={entry} />)
						.reduce((acc, curr) => acc === null ? curr : (
							<>
								{acc}
								{/* <hr css={css`
								max-width: 50%;
								margin-right: auto;
							`} /> */}
								{curr}
							</>
						), null)
				}
			</DEGREES>
		</CollapsibleSection>
	)
}
