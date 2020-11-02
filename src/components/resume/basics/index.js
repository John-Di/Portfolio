import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../../../utils/typography";
import LastFm from "../../last-fm";
import CollapsibleSection from "../../collapsible-section";
import { PARENT_TRIGGER } from "../../collapsible-section/styles";
import Image from "../../image";
import Skills from "../skills";
import Social from "../social";
import {
	BASICS,
	IMAGE_WRAPPER,
	H1,
	ROLES
} from './styles';

export default function Basics({ data, resume }) {
	const { basics, skills } = resume;

	let roles = basics.label.split(',').reduce((acc, curr) => acc === null ? curr : (
		<>
			{acc}
			<span css={css`
				margin: 0 ${rhythm(0.25)};
			`}>&bull;</span>
			{curr}
		</>
	), null);

	return (
		<BASICS>
			<CollapsibleSection
				speed={200}
				triggerTagName="div"
				triggerStyles={PARENT_TRIGGER}
				label={
					(
						<>

							<IMAGE_WRAPPER>
								<Image imgName="me.jpg" />
							</IMAGE_WRAPPER>
							<H1>{basics.name}</H1>
							<ROLES>{roles}</ROLES>
						</>
					)

				}
			>
				<Skills data={skills} />
				<Social data={basics.profiles} />
			</CollapsibleSection>
		</BASICS >
	)
}
