import React from "react";
import Moment from 'react-moment';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import {
	DEGREE,
	DEGREE_DESC,
	NAME,
	DURATION_WRAPPER,
	DURATION,
	FONTAWESOMEICON
} from './styles';

export default function DegreeEntry({ data }) {
	const degree = data;
	const duration = degree.endDate ? <Moment add={{ months: 1 }} subtract={{ days: 1 }} duration={degree.startDate}
		date={degree.endDate}
	/> : <Moment add={{ months: 1 }} subtract={{ days: 1 }} durationFromNow
		date={degree.endDate}
		/>;

	return (
		<DEGREE>
			<NAME>{degree.studyType}</NAME>
			<br />
			<DEGREE_DESC>
				- <span>{degree.area}</span> | <span>{degree.institution}</span>
			</DEGREE_DESC>
			<DURATION_WRAPPER>
				<FONTAWESOMEICON icon={faCalendar} color="#49586d" />
				<DURATION>{degree.startDate} - {degree.endDate}</DURATION>
			</DURATION_WRAPPER>
		</DEGREE>
	)
}
