import React from "react"
import { css } from "@emotion/core";
import { rhythm } from "../../../utils/typography"

export default function SocialLink({ data, children }) {
	const { url, color, flavor, network } = data;
	console.log(data);
	return (
		<a
			href={url}
			target="_blank"
			title={flavor.replace(`{network}`, network)}
			css={css`
				display: block;
				box-shadow: none;
				text-decoration: none;
				overflow: hidden;
				fill: #${color};
				transition: fill 0.1s ease 0s;

				&:hover {
					fill: black;
				}

				svg {
					width: ${rhythm(1.5)};
					height: ${rhythm(1.5)}; 
				}
			`}>
			{children}
		</a>
	)
}
