import React from "react";
import { css } from "@emotion/core";
import Work from "../work";
import CollapsibleSection from "../collapsible-section";

export default function Career({ data }) {
	const work = data;
	const label = (<h2>Work Experience</h2>);

	return (
		<CollapsibleSection label={label} triggerStyles={{
			'marginTop': 0,
			'cursor': 'pointer'
		}}>
			<hr />
			{
				work.map((entry, i) => <Work key={`work_${i}`} data={entry} />)
					.reduce((acc, curr) => acc === null ? curr : (
						<>
							{acc}
							<hr css={css`
								max-width: 50%;
								margin-right: auto;
							`} />
							{curr}
						</>
					), null)
			}
		</CollapsibleSection>
	)
}
