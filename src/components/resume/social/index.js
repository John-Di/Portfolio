import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../../../utils/typography"
import SocialLink from "../social-link";
import LinkedIn from "../../../../static/svgs/linkedin.svg";
import Github from "../../../../static/svgs/github.svg";

export default function Social({ data }) {
	const profiles = data;
	const social = {
		linkedin: <LinkedIn />,
		github: <Github />
	}

	return (
		<div>
			{/* <h2>Find me on</h2> */}
			<hr css={css`
					margin: 0 0 ${rhythm(1)};
				`} />
			<ul css={css`
			list-style: none;
			text-align: center;
			line-height: 1;
			margin: 0;

			&::after {
				content: '';
				clear: both;
				display: table;
			}
		`}>
				{profiles.map(profile => {
					return <li key={profile.network} css={css`
							line-height: 1;
							margin: 0;
							display: inline-block;
							padding: 0 ${rhythm(0.5)};
						`}>
						<SocialLink data={profile}>
							{social[profile.platform]}
						</SocialLink>
					</li>
				})}
			</ul>
		</div>
	)
}
