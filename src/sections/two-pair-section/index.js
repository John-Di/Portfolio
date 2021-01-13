import React from "react";
import Section from '../../sections/section';
import TextMediaBlock from '../../components/text-media-block';
import FancyCTA from '../../components/fancy-cta';
import ResponsivePair from '../../layouts/responsive-pair';
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
		alternates: false
	}
];

export default function TwoPairSection(maxWidth = size.laptopL, hasPadding = randomBool()) {
	let backgroundImage = randomImage(randomIntegerEx(0, 10000), 1920, 1920);
	let backgroundColor = randomColor(),
		backgroundColor2 = randomColor(),
		i = -1;
	return (
		<Section maxWidth={maxWidth} hasPadding={hasPadding}>
			<ResponsivePair
				adjacentBreakpoints={[
					{
						bp: `${device.laptopL}`
					}
				]}
				items={[
					<TextMediaBlock
						backgroundColor={backgroundColor}
						backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
						adjacentBreakpoints={ADJ_BP}
						isEven={++i % 2 === 0}
					>
						<h2>Text Media Block</h2>
						<p>Just for the time being...</p>
						<FancyCTA
							parentBackgroundColor={backgroundColor}
						>Learn More</FancyCTA>
					</TextMediaBlock>,
					<TextMediaBlock
						backgroundColor={backgroundColor2}
						backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
						adjacentBreakpoints={ADJ_BP}
						isEven={++i % 2 === 0}
					>
						<h2>Text Media Block</h2>
						<p>Just for the time being...</p>
						<FancyCTA
							parentBackgroundColor={backgroundColor2}
						>Learn More</FancyCTA>
					</TextMediaBlock>
				]} />
		</Section>
	);

};
