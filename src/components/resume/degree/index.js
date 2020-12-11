import React from "react";
import Moment from 'react-moment';
import {
	faLaptopCode,
	faCalendar,
	faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import IconBullet from '../../../components/icon-bullet';
import {
	DEGREE,
	NAME
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
			<IconBullet
				icon={faLaptopCode}
				textSize={`0.75em`}
				textContent={`${degree.area}`}
			/>
			<IconBullet
				icon={faGraduationCap}
				textSize={`0.75em`}
				textContent={`${degree.institution}`}
			/>
			<IconBullet
				icon={faCalendar}
				textSize={`0.75em`}
				textContent={`${degree.startDate} - ${degree.endDate}`}
			/>
		</DEGREE>
	)
}
