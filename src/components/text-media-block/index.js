import React from "react";
import TextBlock from '../text-block';
import ResponsivePair from '../../layouts/responsive-pair';

export default function TextMediaBlock({ backgroundColor, backgroundImage, responsive_rules = () => '', children, delayOffset = 0, isEven = true, isSquare = true, isFullWidth, hasPadding = false }) {
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
			responsive_rules={responsive_rules(isFullWidth, isEven)}
			isFullWidth={isFullWidth}
			// data-aos='fade-up'
			// data-aos-anchor-placement="top-center"
			items={[
				(<TextBlock
					delayOffset={delayOffset}
					isSquare={isSquare}
					overlay={true}
				>
					{children}
				</TextBlock>)]} />
	);
}
