import React from "react";
import CollapsibleSection from "../../components/collapsible-section";
import {
	WRAPPER,
	INNER
} from './styles';

export default function InnerSection({ className = '', heading, children }) {

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
