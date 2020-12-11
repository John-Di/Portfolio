import React from "react";
import CollapsibleSection from "../../collapsible-section";
import InnerSection from "../inner-section";
import ImageFloatText from '../image-float-text';
import IconBullet from '../../../components/icon-bullet';
import {
	faGamepad,
	faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import {
	TYPE,
	TOGGLE,
	TOGGLE_NAME,
	TOGGLE_ICON_DASH,
	PROJECT,
	DESCRIPTION,
	DUTIES,
	DUTY,
	PROJECT_KEYWORDS,
	PROJECT_KEYWORD
} from './styles';

export default function Project({ data }) {
	const { name, type, description, url, highlights, keywords, image, roles } = data;
	const label = (
		<TOGGLE>
			<IconBullet
				icon={faGamepad}
				textContent={name}
				gap={{
					regular: '0.75em',
					resp: {
						device: 'tablet',
						value: '0.875em'
					}
				}}
			/>
			<TYPE>
				<IconBullet
					icon={faMobileAlt}
					textContent={type}
					gap={{
						regular: '0.75em',
						resp: {
							device: 'tablet',
							value: '0.875em'
						}
					}}
				/>
			</TYPE>
		</TOGGLE>
	);

	return (
		<InnerSection
			heading={label}
			className={'Collapsible__contentInner--project'}
		>
			<ImageFloatText
				url={url}
				image={image}
			>
				<DESCRIPTION>{description}</DESCRIPTION>
				<PROJECT_KEYWORDS>
					{
						roles.map((role, i) => (
							<PROJECT_KEYWORD key={`keyword_${i}`}>{role}</PROJECT_KEYWORD>
						))
					}
				</PROJECT_KEYWORDS>
				<DUTIES>
					{highlights.map((highlight, i) => <DUTY key={`highlight_${i}`}>{highlight}</DUTY>)}
				</DUTIES>
				<PROJECT_KEYWORDS>
					{
						keywords.map((keyword, i) => (
							<PROJECT_KEYWORD key={`keyword_${i}`}>{keyword}</PROJECT_KEYWORD>
						))
					}
				</PROJECT_KEYWORDS>
			</ImageFloatText>
		</InnerSection>
	)
}
