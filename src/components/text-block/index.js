import React from "react";
import { device } from '../../utils/variables';
import {
	WRAPPER,
	CONTENT,
	TEXT_BLOCK
} from './styles';

// data-aos='fade-up'
// // data-aos-offset="200"
// data-aos-delay="250"
// // data-aos-duration="1000"
// // data-aos-easing="ease-in-out"
// // data-aos-mirror="true"
// // data-aos-once="false"
// data-aos-anchor-placement="top-center"

// data-aos='fade-up'
// data-aos-anchor-placement="top-center"
// data-aos-offset="200"
// data-aos-duration="1000"
// data-aos-easing="ease-in-out"
// data-aos-mirror="true"
// data-aos-once="false"

export default function TextBlock({ cols, backgroundColor = '', backgroundImage = '', image_first, reversed, children, animated = true, delayOffset = 0, isSquare = false }) {

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
		<TEXT_BLOCK
			className="text-block"
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			delayOffset={delayOffset}
			squareBreakpoints={squareBreakpoints}
			isSquare={isSquare}
		>
			<WRAPPER
			>
				<CONTENT
					data-aos={animated && 'fade-up'}
					data-aos-delay={animated && `${750 + delayOffset}`}
					data-aos-duration={animated && '1000'}
				>{children}</CONTENT>
			</WRAPPER>
		</TEXT_BLOCK>
	);
}
