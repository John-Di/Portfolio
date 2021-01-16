import React from "react";
import Section from "../section";
import {
	PARAGRAPH
} from './styles';

export default function Summary({ data }) {
	const basics = data;

	return (
		<Section
			heading={`About`}
			className={'Collapsible--summary'}
		>
			<PARAGRAPH>{basics.summary}</PARAGRAPH>
		</Section>
	)
}
