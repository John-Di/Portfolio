import React from "react";
import TextBlock from '../text-block';
import {
	TEXT_MEDIA_BLOCK,
	COLUMN_STACKED,
	ADJACENT
} from './styles';

export default function TextMediaBlock({ backgroundColor, backgroundImage, responsive_rules = () => '', children, delayOffset = 0, isEven = true, isSquare = true, isFullWidth }) {
	console.log(isFullWidth, isEven)
	return (
		<TEXT_MEDIA_BLOCK
			className="text-media-block"
			backgroundImage={backgroundImage}
			backgroundColor={backgroundColor}
			image_left={isEven}
			image_above={isEven}
			data-aos='fade-up'
			isSquare={isSquare}
			data-aos-anchor-placement="top-center"
			responsive_rules={responsive_rules(isFullWidth, isEven)}
			isEven={isEven}
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
