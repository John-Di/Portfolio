import React from "react";
import TextBlock from '../text-block';
import {
	TEXT_MEDIA_BLOCK,
	COLUMN_STACKED,
	ADJACENT
} from './styles';

export default function TextMediaBlock({ backgroundColor, backgroundImage, responsive_rules = () => '', children, delayOffset = 0, index = 0, isSquare = true }) {
	console.log("responsive_rules(index)", responsive_rules(index));

	return (
		<TEXT_MEDIA_BLOCK
			className="text-media-block"
			backgroundImage={backgroundImage}
			backgroundColor={backgroundColor}
			image_left={!(index % 2)}
			image_above={!(index % 2)}
			data-aos='fade-up'
			isSquare={isSquare}
			data-aos-anchor-placement="top-center"
			responsive_rules={responsive_rules(index)}
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
