import React from "react";
import { css } from "@emotion/core";
import Work from "../work";
import CollapsibleSection from "../../collapsible-section";
import {
	HEADING,
	DIVIDER
} from './styles';

export default function Career({ data }) {
	const work = data;
	const label = (<HEADING>Work Experience</HEADING>);

	return (
		<CollapsibleSection
			label={label}
			className={'Collapsible--career'}
			triggerStyles={{
				'marginTop': 0,
				"cursor": "pointer"
			}}>
			{/* <DIVIDER /> */}
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
		</CollapsibleSection>
	)
}
