import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../../../utils/typography";
import LastFm from "../../last-fm";
import Image from "../../image";
import Skills from "../skills";
import Social from "../social";

export default function Basics({ data }) {
	const { basics, skills } = data;
	console.log(basics);

	const wrapper = css`
		background: white;
		position: fixed;
		text-align: center;
		border-radius: 1em;
		margin: 0;
		white-space: nowrap;
		padding: ${rhythm(1)};
		max-width: 30em;
		width: 100%;
	`;

	const profile_image = (
		<div css={css`
			border-radius: 50%;
			margin: 0 auto;
			max-width: 8em;
			overflow: hidden;
		`}>
			<Image imgName="me.jpg" />
		</div>
	);

	let p = new DOMParser();
	let d = p.parseFromString('&bull;', 'text/html');
	let roles = basics.label.split(',').reduce((acc, curr) => acc === null ? curr : (
		<>
			{acc}
			<span css={css`
				margin: 0 ${rhythm(0.25)};
			`}>{d.documentElement.textContent}</span>
			{curr}
		</>
	), null);

	return (
		<div css={wrapper}>
			{profile_image}
			<h1 css={css`
					margin-top: ${rhythm(1)}
				`}>{basics.name}</h1>
			<p css={css`
				margin: ${rhythm(0.75)} 0 0;
			`}>{roles}</p>
			<LastFm userName="Parmijohn" apiKey="192a920c481c3f62398e29c9cca2e7b9" />
			<Skills data={skills} />
			<Social data={basics.profiles} />
		</div >
	)
}
