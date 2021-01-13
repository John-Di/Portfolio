import React from "react";
import Section from '../section';
import TextMediaBlock from '../../components/text-media-block';
import FancyCTA from '../../components/fancy-cta';
import ResponsivePair from '../../layouts/responsive-pair';
import TwoPairSection from '../two-pair-section';
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

const breakpoints = {
	fullWidth: {
		adjacent: [
			{
				bp: `${device.mobileXL} and ${device.max_laptop}`,
				alternates: true
			}
		],
		stacked: [
			{
				bp: `${device.laptop}`,
				alternates: true
			}
		]
	},
	pageWidth: {
		adjacent: [
			{
				bp: `${device.mobileXL} and ${device.max_laptop}`,
				alternates: true
			}
		],
		stacked: [
			{
				bp: `${device.laptop}`,
				alternates: true
			}
		]
	}
}


export default function FourPairSection(isFullWidth = randomBool(), maxWidth = size.laptopL, hasPadding = randomBool()) {
	let backgroundImage = randomImage(randomIntegerEx(0, 10000), 1920, 1920);
	let backgroundColor = randomColor(),
		backgroundColor2 = randomColor(),
		backgroundColor3 = randomColor(),
		backgroundColor4 = randomColor(),
		i = 0;

	return (
		<Section maxWidth={maxWidth} hasPadding={hasPadding}>
			<ResponsivePair
				adjacentBreakpoints={[{
					bp: `${device.laptopL}`
				}]}
				items={[
					<ResponsivePair
						adjacentBreakpoints={[{
							bp: `${device.laptop}`
						}]}
						items={[
							<TextMediaBlock
								backgroundColor={backgroundColor}
								// backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
								adjacentBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].adjacent}
								stackedBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].stacked}
							>
								<h2>Text Media Block {++i}/4</h2>
								<p>Just for the time being...</p>
								<FancyCTA
									parentBackgroundColor={backgroundColor}
								>Learn More</FancyCTA>
							</TextMediaBlock>,
							<TextMediaBlock
								backgroundColor={backgroundColor2}
								// backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
								adjacentBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].adjacent}
								stackedBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].stacked}
								isEven={true}
							>
								<h2>Text Media Block {++i}/4</h2>
								<p>Just for the time being...</p>
								<FancyCTA
									parentBackgroundColor={backgroundColor2}
								>Learn More</FancyCTA>
							</TextMediaBlock>
						]} />,
					<ResponsivePair
						adjacentBreakpoints={[{
							bp: `${device.laptop}`
						}]}
						items={[
							<TextMediaBlock
								backgroundColor={backgroundColor3}
								// backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
								adjacentBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].adjacent}
								stackedBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].stacked}
							>
								<h2>Text Media Block {++i}/4</h2>
								<p>Just for the time being...</p>
								<FancyCTA
									parentBackgroundColor={backgroundColor3}
								>Learn More</FancyCTA>
							</TextMediaBlock>,
							<TextMediaBlock
								backgroundColor={backgroundColor4}
								// backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
								adjacentBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].adjacent}
								stackedBreakpoints={breakpoints[isFullWidth ? 'fullWidth' : 'pageWidth'].stacked}
								isEven={true}
							>
								<h2>Text Media Block {++i}/4</h2>
								<p>Just for the time being...</p>
								<FancyCTA
									parentBackgroundColor={backgroundColor4}
								>Learn More</FancyCTA>
							</TextMediaBlock>
						]} />]} />
		</Section>
	);

};
