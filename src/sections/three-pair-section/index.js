import React from "react";
import Section from '../section';
import TextMediaBlock from '../../components/text-media-block';
import FancyCTA from '../../components/fancy-cta';
import ResponsivePair from '../../layouts/responsive-pair';
import { jsxToArray } from '../../utils/dom-builder';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomBool
} from '../../utils/randoms';
import { size, device } from '../../utils/variables';

const breakpoints = {
	fullWidth: {
		adjacent: [
			{
				bp: `${device.mobileXL} and ${device.max_laptop}`,
				alternates: true
			},
			{
				bp: `${device.desktop}`,
				alternates: false
			}
		],
		stacked: [
			{
				bp: `${device.laptop} and ${device.max_desktop}`,
				alternates: true
			}
		]
	},
	pageWidth: {
		adjacent: [
			{
				bp: `${device.mobileXL} and ${device.max_laptop}`,
				alternates: true
			},
			{
				bp: `${device.desktop}`,
				alternates: false
			}
		],
		stacked: [
			{
				bp: `${device.laptop} and ${device.max_desktop}`,
				alternates: true
			}
		]
	}
}

export default function ThreePairSection(isFullWidth = randomBool(), maxWidth = size.laptopL, hasPadding = randomBool()) {
	return (
		<Section maxWidth={maxWidth} hasPadding={hasPadding} className="three-pair-section">
			<ResponsivePair
				adjacentBreakpoints={[{
					bp: `${device.laptop}`
				}]}
				items={
					jsxToArray(3, (length, _, index) => {
						let backgroundColor = randomColor();
						return (
							<TextMediaBlock
								backgroundColor={backgroundColor}
								backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
								adjacentBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].adjacent}
								stackedBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].stacked}
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
