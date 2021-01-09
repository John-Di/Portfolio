import React from "react";
import Section from '../../section';
import TextMediaBlock from '../../../components/text-media-block';
import { size, device } from '../../../utils/variables';
import Grid from '../../../layouts/grid';
import GridItem from '../../../components/grid-item';
import { contentMaker } from '../../../utils/dom-builder';
import FancyCTA from '../../../components/fancy-cta';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomIntegerIn,
	randomBool,
	randomSection
} from '../../../utils/randoms';
import {
	COLUMN_STACKED,
	ADJACENT
} from '../../../components/text-media-block/styles';

const RESPONSIVE_DEFAULTS = {
	1: {
		"grid": maxWidth => `
			margin: 0 auto;
			${maxWidth ? `max-width: ${size.laptopL}px` : `max-width: 100%`};
			grid-template-columns: repeat(1, 1fr);
		
			@media ${device.tablet} {
				grid-template-columns: repeat(1, 1fr);
			}
		`,
		"items": () => [ADJACENT(`${device.mobileXL}`, false)].join('')
	},
	2: {
		"grid": () => `
			grid-template-columns: repeat(1, 1fr);
			@media ${device.laptopL} {
				grid-template-columns: repeat(2, 1fr);
			}
		`,
		"items": (isFullWidth, isEven) => [
			ADJACENT(`${device.mobileL} and ${device.max_laptopL}`, isEven),
			COLUMN_STACKED(`${device.laptopL}`, isEven)
		].join('')
	},
	3: {
		"grid": () => `
			grid-template-columns: repeat(1, 1fr);
		
			@media ${device.tablet} {
				grid-template-columns: repeat(3, 1fr);
			}

			@media ${device.laptop} {
				grid-template-columns: repeat(3, 1fr);
			}
		`,
		"items": (isFullWidth, isEven) => [
			ADJACENT(`${device.mobileL} and ${device.max_tablet}`, isEven),
			COLUMN_STACKED(`${device.tablet} and ${device.max_laptopL}`, isEven),
			`${isFullWidth ? '' : COLUMN_STACKED(`${device.laptop} and ${device.max_laptopL}`, isEven)}`,
			COLUMN_STACKED(`${device.laptopL}`, isEven)
		].join('')
	},
	4: {
		"grid": () => `
			grid-template-columns: repeat(1, 1fr);
		
			@media ${device.tablet} {
				grid-template-columns: repeat(2, 1fr);
			}

			@media ${device.laptop} {
				grid-template-columns: repeat(4, 1fr);
			}
		`,
		"items": (isFullWidth, isEven) => [
			ADJACENT(`${device.mobileL} and ${device.max_tablet}`, isEven),
			COLUMN_STACKED(`${device.tablet} and ${device.max_laptop}`, isEven),
			`${isFullWidth ? ADJACENT(`${device.laptop}`, false) : COLUMN_STACKED(`${device.laptop} and ${device.max_laptopL}`, isEven)}`,
			COLUMN_STACKED(`${device.laptopL}`, isEven)
		].join('')
	}
};

export default function TextMediaGrid({ responsive = {} }) {

	let col_count = randomIntegerIn(1, 4);
	let responsive_rules = !(Object.keys(responsive).length === 0 && responsive.constructor === Object) ? responsive : RESPONSIVE_DEFAULTS;
	let sectionWidth = Math.random() < 0.3333,
		hasPadding = Math.random() < 0.3333;

	console.log("TextMediaGrid isFullWidth", !sectionWidth || !hasPadding);
	return (
		<Section maxWidth={sectionWidth ? '1440px' : '100%'} hasPadding={hasPadding}>
			<Grid responsive_rules={[responsive_rules[col_count].grid(randomBool())].join(',')}>
				{contentMaker(col_count, (length, k, index) => {
					let background = randomColor();
					return (
						<GridItem key={index} maxWidth={100 / length}>
							<TextMediaBlock
								key={index}
								index={index}
								backgroundColor={`${background}`}
								backgroundImage={`${randomImage(randomIntegerEx(0, 10000) + index, 1920, 1920)}`}
								image_first={`${randomBool()}`}
								reversed={!!1}
								isFullWidth={!sectionWidth && !hasPadding}
								responsive_rules={responsive_rules[length].items}
								isEven={index % 2 == 0}
							>
								<h2>Text Media {index + 1}/{length}</h2>
								<p>Just for the time being...</p>
								<FancyCTA
									modest={({ isModest: col_count > 2 })}
									parentBackgroundColor={background}
								>Learn More</FancyCTA>
							</TextMediaBlock>
						</GridItem>
					)
				})}
			</Grid>
		</Section>
	)
}
