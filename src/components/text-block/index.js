import React from "react";
import ContentBlock from '../content-block';

export default function TextBlock({ children, textColor, backgroundColor, delayOffset = 0, isSquare = false, overlay }) {
	return (
		<ContentBlock
			className="text-block"
			delayOffset={delayOffset}
			isSquare={isSquare}
			overlay={overlay}
			backgroundColor={backgroundColor}
			textColor={textColor}
		>
			{children}
		</ContentBlock>
	);
}
