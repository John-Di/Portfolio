import React from "react";
import {
	faLaptopCode,
	faCalendar,
	faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import IconBullet from '../../components/icon-bullet';
import {
	DEGREE,
	NAME
} from './styles';

export default function DegreeEntry({ data }) {
	const degree = data;

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
