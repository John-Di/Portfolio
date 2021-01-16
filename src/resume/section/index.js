import React from "react";
import CollapsibleSection from "../../collapsible-section";
import {
	WRAPPER,
	HEADING,
	INNER
} from './styles';

export default function Section({ className = '', heading, children }) {
	const label = (<HEADING>{heading}</HEADING>);

	return (
		<WRAPPER>
			<CollapsibleSection
				label={label}
				speed={200}
				className={className}
				triggerStyles={{
					'marginTop': 0,
					'cursor': 'pointer'
				}}
			>
				<INNER>{children}</INNER>
			</CollapsibleSection>
		</WRAPPER>
	)
}
