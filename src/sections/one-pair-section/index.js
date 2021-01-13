import React from "react";
import Section from '../../sections/section';
import TextMediaBlock from '../../components/text-media-block';
import FancyCTA from '../../components/fancy-cta';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomIntegerIn,
	randomBool,
	randomImageArray,
	idealTextColor
} from '../../utils/randoms';
import { size, device } from '../../utils/variables';

const ADJ_BP = [
	{
		bp: `${device.mobileXL}`,
		alternates: true
	}
];

export default function OnePairSection(maxWidth = size.laptopL, hasPadding = randomBool()) {
	let backgroundImage = randomImage(randomIntegerEx(0, 10000), 1920, 1920);
	let backgroundColor = randomColor();
	return (
		<Section maxWidth={maxWidth} hasPadding={hasPadding}>
			<TextMediaBlock
				backgroundColor={backgroundColor}
				backgroundImage={backgroundImage}
				adjacentBreakpoints={ADJ_BP}
			>
				<h2>Text Media Block</h2>
				<p>Just for the time being...</p>
				<FancyCTA
					parentBackgroundColor={backgroundColor}
				>Learn More</FancyCTA>
			</TextMediaBlock>
		</Section>
	);

};
