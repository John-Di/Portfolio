import React from "react";
import DegreeEntry from "../degree";
import Section from "../section";

export default function Education({ data }) {
	const education = data;

	return (
		<Section
			heading={`Education`}
			className={'Collapsible--education'}
		>
			{
				education
					.map((entry, i) => <DegreeEntry key={`degree_${i}`} data={entry} />)
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
