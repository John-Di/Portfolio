import React from "react";
import Moment from 'react-moment';
import {
	ICON,
	FONTAWESOMEICON,
	DURATION,
	WRAPPER
} from './styles';
import Tooltip from '../tooltip';

Moment.globalLocale = 'en-ca';

export default function Duration({ icon, children }) {
	// const duration = work.endDate ? <Moment add={{ months: 1 }} subtract={{ days: 1 }} duration={work.startDate}
	// 	date={work.endDate}
	// /> : <Moment add={{ months: 1 }} subtract={{ days: 1 }} durationFromNow
	// 	date={work.endDate}
	// 	/>;

	return (
		<WRAPPER>
			<ICON>
				<FONTAWESOMEICON icon={icon} color="#49586d" />
			</ICON>
			<DURATION>{children}</DURATION>
			{/* <Moment duration={work.startDate}
				date={work.endDate}
			/> */}
		</WRAPPER>
	)
}
