import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../../../utils/typography";

export default function Skills({ data }) {
	const skills = data;
	console.log(skills);

	return (
		<div>
			{/* <h2>Proficiencies</h2> */}
			<hr css={css`
					margin: ${rhythm(1)} 0 ${rhythm(0.75)};
				`} />
			<ul css={css`
				list-style: none;
				line-height: 1;
				margin: 0;
				padding: 0 ${rhythm(0.5)};

				&::after {
					content: '';
					clear: both;
					display: table;
				}
			`}>
				{skills.map((category, i) => {
					return <li key={`skill_section_${i}`} css={css`
								line-height: 1;
								margin: 0.5em 0;
								text-align: left;
							`}>
						<span><strong>{category.name}</strong>:</span>
						<br />
						<ul css={css`
							list-style: none;
							line-height: 1;
							display: inline-block;
							margin: 0;
							margin-top: 1em;
							white-space: pre-wrap;
						`}>
							{
								category.keywords.map((skill, j) => (
									<li key={`skill_name_${j}`} css={css`
										display: inline-block;
										margin-right: 0.25em;
										padding: 0.5em;
										background: #1975ca;
										color: white;
										border-radius: 0.25em;
									`}>
										{skill}
									</li>
								))
							}
						</ul>
						{/* <SocialLink data={skill}>
							{social[skill.platform]}
						</SocialLink> */}
					</li>
				})}
			</ul>
		</div>
	)
}
