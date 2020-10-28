import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../../../utils/typography";
import Moment from 'react-moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function DegreeEntry({ data }) {
	const degree = data;
	const duration = degree.endDate ? <Moment add={{ months: 1 }} subtract={{ days: 1 }} duration={degree.startDate}
		date={degree.endDate}
	/> : <Moment add={{ months: 1 }} subtract={{ days: 1 }} durationFromNow
		date={degree.endDate}
		/>;

	return (
		<div css={css`
				margin-bottom: ${rhythm(0.75)};
		`}>
			<h3 css={css`
				display: inline-block;
				"margin": 0 auto ${rhythm(0.75)};
				"width": "100%";
			`}>
				{degree.studyType}
			</h3>
			<span css={css`
				margin-left: 1em;
				margin-right: 0.25em;
				position: relative;
			`}>
				<FontAwesomeIcon icon={faCalendar} color="#49586d" css={css`
					height: 100%;
					width: 100%;
				`} />
				<span css={css`
					margin-left: 0.5em;
					margin-right: 0.25em;
					position: relative;
				`}>{degree.startDate} - {degree.endDate}</span>
			</span>
			<br />
				- <span>{degree.area}</span> | <span>{degree.institution}</span>
		</div>
	)
}
