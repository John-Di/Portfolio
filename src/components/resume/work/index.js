import React from "react";
import { rhythm } from "../../../utils/typography"
import CollapsibleSection from "../../collapsible-section";
import Moment from 'react-moment';
import Duration from '../../duration';
import Image from "../../image";
import {
	faCalendar,
	faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { device } from '../../../utils/variables';
import IconBullet from '../../../components/icon-bullet';
import {
	TOGGLE,
	TOGGLE_NAME,
	CAREER,
	DUTY,
	EMPLOYER,
	IMAGE_WRAPPER,
	CONTENT,
	INNER,
	DIV,
	DURATION,
	DATE,
	ICON_WRAPPER,
	ICON_TEXT,
	FONTAWESOMEICON,
	DATE_ICON
} from './styles';

Moment.globalLocale = 'en-ca';

export default function Work({ data }) {
	console.log(device, `@media ${device.max_mobileL}`);
	const work = data;
	// const duration = work.endDate ? <Moment add={{ months: 1 }} subtract={{ days: 1 }} duration={work.startDate}
	// 	date={work.endDate}
	// /> : <Moment add={{ months: 1 }} subtract={{ days: 1 }} durationFromNow
	// 	date={work.endDate}
	// 	/>;
	const label = (
		<TOGGLE>
			<IconBullet
				icon={faLaptopCode}
				color={`#49586d`}
				textContent={work.position}
				gap={{
					regular: '0.75em',
					resp: {
						device: 'tablet',
						value: '0.875em'
					}
				}}
			/>
			<DURATION
				icon={faClock}
				startDate={work.startDate}
				endDate={work.endDate}
			>
				<Moment
					duration={work.startDate}
					date={work.endDate}
				/>
			</DURATION>
		</TOGGLE>
	);

	const work_image = work.url && work.image ? (
		<IMAGE_WRAPPER href={work.url} target="_blank" >
			<Image imgName={work.image} />
		</IMAGE_WRAPPER>
	) : null;

	return (
		<CollapsibleSection
			speed={200}
			className={'Collapsible--work'}
			label={label} triggerStyles={{
				"cursor": "pointer",
				"margin": `0 auto 0.984375em`,
				"width": "100%"
			}}>
			<INNER>
				{work_image}
				{/* <p>
					{work.summary}
				</p> */}
				<CONTENT>
					<DIV>
						<EMPLOYER>{work.name}</EMPLOYER>
						<IconBullet
							icon={faCalendar}
							color={`#49586d`}
							textSize={`0.875em`}
							gap={`0.5em`}
							textContent={
								<DATE
									// icon={faCalendar}
									startDate={work.startDate}
									endDate={work.endDate}
								>
									{work.startDate} - {work.endDate}
								</DATE>
							}
						/>
					</DIV>
					<CAREER>
						{work.highlights.map((highlight, i) => <DUTY key={`highlight_${i}`}>{highlight}</DUTY>)}
					</CAREER>
				</CONTENT>
			</INNER>
		</CollapsibleSection>
	)
}
