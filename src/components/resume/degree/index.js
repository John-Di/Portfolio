import React from "react";
import Moment from 'react-moment';
import {
	faLaptopCode,
	faCalendar,
	faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import {
	DEGREE,
	DEGREE_DESC,
	NAME,
	ICON_WRAPPER,
	DURATION,
	FONTAWESOMEICON,
	ALMAMATER,
	ICON_TEXT
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
				<ICON_WRAPPER>
					<FONTAWESOMEICON icon={faLaptopCode} color="#49586d" />
				</ICON_WRAPPER>
				<ICON_TEXT>{degree.area}</ICON_TEXT>
			</DEGREE_DESC>
			<DEGREE_DESC>
				<ICON_WRAPPER>
					<FONTAWESOMEICON icon={faGraduationCap} color="#49586d" />
				</ICON_WRAPPER>
				<ICON_TEXT>{degree.institution}</ICON_TEXT>
			</DEGREE_DESC>
			<DEGREE_DESC>
				<ICON_WRAPPER>
					<FONTAWESOMEICON icon={faCalendar} color="#49586d" />
				</ICON_WRAPPER>
				<ICON_TEXT>{degree.startDate} - {degree.endDate}</ICON_TEXT>
			</DEGREE_DESC>
		</DEGREE>
	)
}
