import React from "react";
import Section from '../../components/section';
import TextMediaBlock from '../../components/text-media-block';
import FancyCTA from '../../components/fancy-cta';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomBool
} from '../../utils/randoms';
import {
	idealTextColor
} from '../../utils/IdealTextColor';
import { size, device } from '../../utils/variables';

const breakpoints = [
	{
		bp: `${device.mobileXL}`,
		alternates: true
	}
];

export default function OnePairSection(isFullWidth = true, maxWidth = size.laptopL, hasPadding = false) {
	let backgroundColor = randomColor();
	isFullWidth = isFullWidth.hasOwnProperty('isFullWidth') ? isFullWidth.isFullWidth : isFullWidth;
	hasPadding = !isFullWidth;
	console.log('OnePairSection', isFullWidth, isFullWidth ? `One Full Width` : `One Page Width`, 'padding', hasPadding);

	console.log('Rando', randomBool());
	return (
		<Section maxWidth={isFullWidth ? `100%` : maxWidth} hasPadding={hasPadding} className="one-pair-section"
			heading={(<h1>One Pair Section</h1>)}
			subheading={(<h2>({isFullWidth ? `One Full Width` : `One Page Width`})</h2>)}>
			<TextMediaBlock
				backgroundColor={backgroundColor}
				backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
				adjacentBreakpoints={breakpoints}
			>
				<h2>Text Media Block</h2>
				<p>Just for the time being...</p>
				<FancyCTA
					textColor={idealTextColor(backgroundColor)}
				>Learn More</FancyCTA>
			</TextMediaBlock >
		</Section >
	);

};
