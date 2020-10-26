import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../../../utils/typography";

export default function DegreeEntry({ data }) {
	const degree = data;

	return (
		<>
			<h3 css={css`
				display: inline-block;
				"margin": 0 auto ${rhythm(0.75)};
				"width": "100%";
			`}>
				{degree.studyType}
			</h3> - <span>{degree.area}</span> | <span>{degree.institution}</span>
		</>
	)
}
