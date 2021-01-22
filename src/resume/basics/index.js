import React from "react"
import { css } from "@emotion/core"
import CollapsibleSection from "../../components/collapsible-section";
import { PARENT_TRIGGER } from "../../components/collapsible-section/styles";
import Image from "../../components/image";
import Skills from "../skills";
import Social from "../social";
import {
	BASICS,
	IMAGE_WRAPPER,
	NAME,
	ROLES,
	PRINT
} from './styles';

export default function Basics({ data, resume }) {
	const { basics, skills } = resume;

	let roles = basics.label.split(',').reduce((acc, curr) => acc === null ? curr : (
		<>
			{acc}
			<span css={css`
				margin: 0 0.328125em;
			`}>&bull;</span>
			{curr}
		</>
	), null);

	return (
		<BASICS>
			<CollapsibleSection
				speed={200}
				triggerTagName="div"
				className={'Collapsible--basics'}
				triggerStyles={PARENT_TRIGGER}
				label={
					(
						<>
							<IMAGE_WRAPPER>
								<Image imgName="me.jpg" />
							</IMAGE_WRAPPER>
							<NAME>{basics.name}</NAME>
							<ROLES>{roles}</ROLES>
						</>
					)
				}
			>
				<Skills data={skills} />
				<Social data={basics.profiles} />
			</CollapsibleSection>
			<PRINT onClick={() => window.print()}>Print</PRINT>
		</BASICS >
	)
}