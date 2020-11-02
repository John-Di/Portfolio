import React from "react";
import { rhythm } from "../../../utils/typography"
import CollapsibleSection from "../../collapsible-section";
import Moment from 'react-moment';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import {
	TOGGLE,
	TOGGLE_NAME,
	TOGGLE_ICON,
	TOGGLE_DURATION,
	FONTAWESOMEICON,
	CAREER
} from './styles';

Moment.globalLocale = 'en-ca';

export default function Work({ data }) {
	const work = data;
	// const duration = work.endDate ? <Moment add={{ months: 1 }} subtract={{ days: 1 }} duration={work.startDate}
	// 	date={work.endDate}
	// /> : <Moment add={{ months: 1 }} subtract={{ days: 1 }} durationFromNow
	// 	date={work.endDate}
	// 	/>;
	const label = (
		<TOGGLE>
			<TOGGLE_NAME>{work.position}</TOGGLE_NAME>
			<TOGGLE_DURATION>
				<TOGGLE_ICON>
					<FONTAWESOMEICON icon={faClock} color="#49586d" />
				</TOGGLE_ICON>
				<Moment add={{ months: 1 }} subtract={{ days: 1 }} duration={work.startDate}
					date={work.endDate}
				/>
			</TOGGLE_DURATION>
		</TOGGLE>
	);

	return (
		<CollapsibleSection
			speed={200}
			className={'Collapsible--work'}
			label={label} triggerStyles={{
				"cursor": "pointer",
				"margin": `0 auto ${rhythm(0.75)}`,
				"width": "100%"
			}}>
			<p>{work.name}</p>
			{/* <p>
				{work.summary}
			</p> */}
			<CAREER>
				{work.highlights.map((highlight, i) => <li key={`highlight_${i}`}>{highlight}</li>)}
			</CAREER>
		</CollapsibleSection>
	)
}
