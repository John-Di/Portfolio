import React from "react";
import TextBlock from '../text-block';
import ResponsivePair from '../../layouts/responsive-pair';
import { device } from '../../utils/variables';

const ADJ_BP_DEFAULTS = [
	{
		bp: `${device.mobileXL}`,
		alternates: true
	}
];

const STK_BP_DEFAULTS = [];


export default function TextMediaBlock({ backgroundColor, backgroundImage, children, delayOffset = 0, isEven = false, isSquare = true, isFullWidth, hasPadding = false, adjacentBreakpoints, stackedBreakpoints, parentColor }) {

	return (
		<ResponsivePair
			className="text-media-block"
			image_left={isEven}
			image_above={isEven}
			hasPadding={hasPadding}
			isEven={isEven}
			overlay={true}
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			isSquare={isSquare}
			isFullWidth={isFullWidth}
			adjacentBreakpoints={adjacentBreakpoints || ADJ_BP_DEFAULTS}
			stackedBreakpoints={stackedBreakpoints || STK_BP_DEFAULTS}
			// data-aos='fade-up'
			// data-aos-anchor-placement="top-center"
			items={[
				(<TextBlock
					delayOffset={delayOffset}
					isSquare={isSquare}
					overlay={true}
					backgroundColor={backgroundColor}
				>
					{children}
				</TextBlock>)]} />
	);
}
