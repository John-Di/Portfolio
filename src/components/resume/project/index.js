import React from "react";
import { rhythm } from "../../../utils/typography"
import CollapsibleSection from "../../collapsible-section";
import Image from "../../image";
import {
	TOGGLE_NAME,
	TOGGLE_ICON,
	TOGGLE_ICON_DASH,
	PROJECT,
	IMAGE_WRAPPER,
	PROJECT_DESC,
	PROJECT_HIGHLIGHTS,
	PROJECT_KEYWORDS,
	PROJECT_KEYWORD
} from './styles';

export default function Project({ data }) {
	const { name, type, description, url, highlights, keywords, image, roles } = data;
	const label = (
		<>
			<TOGGLE_NAME>{name}</TOGGLE_NAME>
			<TOGGLE_ICON_DASH>{type.replace(',', ' | ')}</TOGGLE_ICON_DASH>
		</>
	);
	const roles_label = (
		<>
			<TOGGLE_NAME>{`Roles`}</TOGGLE_NAME>
			<TOGGLE_ICON_DASH>{roles.join(', ')}</TOGGLE_ICON_DASH>
		</>
	);

	return (
		<CollapsibleSection speed={200} label={label} triggerStyles={{
			"cursor": "pointer",
			"margin": `0 auto ${rhythm(0.75)}`,
			"width": "100%"
		}}
			contentInnerClassName={`Collapsible__contentInner--project`}
		>
			<PROJECT>
				<IMAGE_WRAPPER href={url} target="_blank" >
					<Image Tag="a" imgName={image} />
				</IMAGE_WRAPPER>
				<PROJECT_DESC>
					{description}
				</PROJECT_DESC>

				<CollapsibleSection speed={200} label={roles_label} triggerStyles={{
					"cursor": "pointer",
					"margin": `0 auto ${rhythm(0.75)}`,
					"width": "100%"
				}}
					contentInnerClassName={`Collapsible__contentInner--project-roles`}
				>
					<PROJECT_HIGHLIGHTS>
						{highlights.map((highlight, i) => <li key={`highlight_${i}`}>{highlight}</li>)}
					</PROJECT_HIGHLIGHTS>
					<hr />
					<PROJECT_KEYWORDS>
						{
							keywords.map((keyword, i) => (
								<PROJECT_KEYWORD key={`keyword_${i}`}>{keyword}</PROJECT_KEYWORD>
							))
						}
					</PROJECT_KEYWORDS>
				</CollapsibleSection>
			</PROJECT>
		</CollapsibleSection>
	)
}
