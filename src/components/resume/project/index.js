import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../../../utils/typography"
import CollapsibleSection from "../collapsible-section";
import Image from "../../image";

export default function Project({ data }) {
	const { name, description, url, highlights, keywords, image, roles } = data;
	const label = (
		<>
			<h3 css={css`
				display: inline-block;
			`}>{name}</h3>
			<span css={css`
				display: inline-block;

				&::before {
					content: '-';
					padding: 0 0.5em;
					height: 100%;
					display: inline-block;
				}
			`}>{roles.join(', ')}</span>
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
			<div css={css`
				max-width: 50%;
				flex: 1 50%;
				padding: ${rhythm(0.75)} ${rhythm(1.25)};
			`}>
				<p>
					{description}
				</p>
				<ul css={css`
						padding-left: ${rhythm(1.25)};
					`}>
					{highlights.map((highlight, i) => <li key={`highlight_${i}`}>{highlight}</li>)}
				</ul>
				<ul css={css`
						padding-left: ${rhythm(1.25)};
						margin-bottom: 0;
					`}>
					{
						keywords.map((keyword, i) => (
							<li key={`keyword_${i}`} css={css`
								display: inline-block;
								margin-right: 0.25em;
								padding: 0.2em 0.5em;
								background: #1975ca;
								color: white;
								border-radius: 0.25em;
							`}>{keyword}</li>
						))
					}
				</ul>
			</div>
			<a
				href={url}
				target="_blank"
				css={css`
				display: block;
				flex: 1 50%;
				max-width: 50%;
				width: 100%;
				height: 100%;
				padding: ${rhythm(1.25)};
				transition: opacity 0.3s ease 0s;

				&:hover {
					opacity: 0.75;
				}

				.gatsby-image-wrapper {
					border-radius: 2em;
				}
			`}>
				<Image imgName={image} />
			</a>
		</CollapsibleSection>
	)
}
