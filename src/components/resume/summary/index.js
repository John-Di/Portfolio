import React from "react";
import CollapsibleSection from "../collapsible-section";
import { P, ParentTrigger } from './styles';

export default function Summary({ data }) {
	const basics = data;
	const label = (<h2>About</h2>);

	return (
		<CollapsibleSection speed={200} label={label} triggerStyles={ParentTrigger}>
			<hr />
			<P>{basics.summary}</P>
		</CollapsibleSection>
	)
}
