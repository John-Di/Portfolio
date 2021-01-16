import React from "react";
import Work from "../work";
import Section from "../section";

export default function Career({ data }) {
	const work = data;

	return (
		<Section
			heading={`Work Experience`}
			className={'Collapsible--career'}
		>
			{
				work.map((entry, i) => <Work key={`work_${i}`} data={entry} />)
					.reduce((acc, curr) => acc === null ? curr : (
						<>
							{acc}
							{/* <DIVIDER /> */}
							{curr}
						</>
					), null)
			}
		</Section>
	)
}
