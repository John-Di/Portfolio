import React from "react";
import TextBlock from '../text-block';
import { device } from '../../utils/variables';
import {
	TEXT_MEDIA_BLOCK
} from './styles';

export default function TextMediaBlock({ cols, backgroundColor, backgroundImage, image_first = true, reversed, children, delayOffset = 0, index = 0, isSquare = true }) {
	// console.log('TextMediaBlock', cols, backgroundColor, backgroundImage, image_first, reversed, children);

	let num_cols = cols ? cols : children.length;
	// let font_color = 
	let squareBreakpoints = num_cols > 1 ? [
		`${device.mobileL} and ${device.max_tablet}`,
		`${device.tablet} and ${device.max_laptop}`,
		`${device.laptop} and ${device.max_laptopL}`,
		device.laptopL
	] : [
			device.mobileL
		];



	return (
		<TEXT_MEDIA_BLOCK
			cols={Math.min(num_cols, 4)}
			backgroundImage={backgroundImage}
			backgroundColor={backgroundColor}
			image_left={!(index % 2)}
			image_above={!(index % 2)}
			data-aos='fade-up'
			data-aos-anchor-placement="top-center"
		>
			<TextBlock
				delayOffset={delayOffset}
				isSquare={isSquare}
			>
				{children}
			</TextBlock>
		</TEXT_MEDIA_BLOCK>
	);
}
