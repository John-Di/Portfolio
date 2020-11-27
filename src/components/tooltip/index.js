import React from "react";
import Moment from 'react-moment';
import {
	WRAPPER
} from './styles';

Moment.globalLocale = 'en-ca';

export default function Tooltip({ children }) {
	// const duration = work.endDate ? <Moment add={{ months: 1 }} subtract={{ days: 1 }} duration={work.startDate}
	// 	date={work.endDate}
	// /> : <Moment add={{ months: 1 }} subtract={{ days: 1 }} durationFromNow
	// 	date={work.endDate}
	// 	/>;

	return (
		<WRAPPER>{children}</WRAPPER>
	)
}
