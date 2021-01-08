import React from "react";
import Section from '../../section';
import TextMediaBlock from '../../../components/text-media-block';
import { size, device } from '../../../utils/variables';
import Grid from '../../../layouts/grid';
import GridItem from '../../../components/grid-item';
import { contentMaker } from '../../../utils/dom-builder';
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
		
			@media ${device.tablet} {
				grid-template-columns: repeat(2, 1fr);
			}

			@media ${device.laptop} {
				grid-template-columns: repeat(2, 1fr);
			}
		`,
		"items": index => [
			ADJACENT(`${device.mobileL} and ${device.max_tablet}`, index % 2 === 0),
			COLUMN_STACKED(`${device.tablet} and ${device.max_laptop}`, index % 2 === 0),
			ADJACENT(`${device.laptop}`, false)
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
		"items": index => [
			ADJACENT(`${device.mobileL} and ${device.max_tablet}`, index % 2 === 0),
			COLUMN_STACKED(`${device.tablet} and ${device.max_laptopL}`, index % 2 === 0),
			ADJACENT(`${device.laptopL}`, false)
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
		"items": index => [
			ADJACENT(`${device.mobileL} and ${device.max_tablet}`, index % 2 === 0),
			COLUMN_STACKED(`${device.tablet} and ${device.max_laptop}`, index % 2 === 0),
			ADJACENT(`${device.laptop} and ${device.max_desktop}`, index % 2 === 0),
			ADJACENT(`${device.desktop}`, false)
		].join('')
	}
};

export default function TextMediaGrid({ responsive = {} }) {

	let col_count = randomIntegerIn(1, 4);
	let responsive_rules = !(Object.keys(responsive).length === 0 && responsive.constructor === Object) ? responsive : RESPONSIVE_DEFAULTS;
	console.log("col_count", col_count);
	console.log("grid", responsive_rules[col_count].grid);
	return (
		<Section>
			<Grid responsive_rules={[responsive_rules[col_count].grid(randomBool())].join(',')}>
				{contentMaker(col_count, (length, k, index) => {
					console.log("FFFFFFFFindex", length, k, index);
					return (
						<GridItem key={index} maxWidth={100 / length}>
							<TextMediaBlock
								key={index}
								index={index}
								backgroundColor={`${randomColor()}`}
								backgroundImage={`${randomImage(randomIntegerEx(0, 10000) + index, 1920, 1920)}`}
								image_first={`${randomBool()}`}
								reversed={!!1}
								isEven={index % 2 === 0}
								responsive_rules={responsive_rules[length].items}
							>
								<h2>Text Media {index + 1}/{length}</h2>
								<p>Just for the time being...</p>
							</TextMediaBlock>
						</GridItem>
					)
				})}
			</Grid>
		</Section>
	)
}
