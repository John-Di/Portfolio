import React from "react";
import Section from '../../sections/section';
import TextMediaBlock from '../../components/text-media-block';
import FancyCTA from '../../components/fancy-cta';
import ResponsivePair from '../../layouts/responsive-pair';
import { jsxToArray } from '../../utils/dom-builder';
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

const breakpoints = [
	{
		bp: `${device.mobileXL}`,
		alternates: false
	}
];

export default function TwoPairSection(maxWidth = size.laptopL, hasPadding = randomBool()) {
	return (
		<Section maxWidth={maxWidth} hasPadding={hasPadding} className="two-pair-section">
			<ResponsivePair
				adjacentBreakpoints={[
					{
						bp: `${device.laptopL}`
					}
				]}
				items={
					jsxToArray(2, (length, _, index) => {
						let backgroundColor = randomColor();
						return (
							<TextMediaBlock
								backgroundColor={backgroundColor}
								backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
								adjacentBreakpoints={breakpoints}
								isEven={index % 2 === 0}
							>
								<h2>Text Media Block {index + 1}/{length}</h2>
								<p>Just for the time being...</p>
								<FancyCTA
									parentBackgroundColor={backgroundColor}
								>Learn More</FancyCTA>
							</TextMediaBlock>
						)
					})
				} />
		</Section>
	);

};
