import React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../../../utils/typography"
import CollapsibleSection from "../collapsible-section";
import Moment from 'react-moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

Moment.globalLocale = 'en-ca';

export default function Work({ data }) {
	const work = data;
	const duration = work.endDate ? <Moment add={{ months: 1 }} subtract={{ days: 1 }} duration={work.startDate}
		date={work.endDate}
	/> : <Moment add={{ months: 1 }} subtract={{ days: 1 }} durationFromNow
		date={work.endDate}
		/>;
	const label = (
		<>
			<h3 css={css`
				display: inline-block;
			`}>{work.position}</h3>
			<span css={css`
				margin-left: 1em;
				margin-right: 0.25em;
				position: relative;
			`}>
				<FontAwesomeIcon icon={faClock} color="#49586d" css={css`
					height: 100%;
					width: 100%;
				`} />
			</span>
			<Moment add={{ months: 1 }} subtract={{ days: 1 }} duration={work.startDate}
				date={work.endDate}
			/>
		</>
	);

	return (
		<CollapsibleSection speed={200} label={label} triggerStyles={{
			"cursor": "pointer",
			"margin": `0 auto ${rhythm(0.75)}`,
			"width": "100%"
		}}>
			<p>{work.name}</p>
			{/* <p>
				{work.summary}
			</p> */}
			<ul css={css`
					padding-left: ${rhythm(1.25)};
				`}>
				{work.highlights.map((highlight, i) => <li key={`highlight_${i}`}>{highlight}</li>)}
			</ul>
		</CollapsibleSection>
	)
}
