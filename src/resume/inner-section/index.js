import React from "react";
import CollapsibleSection from "../../collapsible-section";
import {
	WRAPPER,
	HEADING,
	INNER
} from './styles';

export default function InnerSection({ className = '', heading, children }) {
	const label = ({ heading });

	return (
		<WRAPPER>
			<CollapsibleSection
				label={heading}
				speed={200}
				className={className}
				triggerStyles={{
					"cursor": "pointer",
					"min-width": "100%"
				}}
			>
				<INNER>{children}</INNER>
			</CollapsibleSection>
		</WRAPPER>
	)
}
