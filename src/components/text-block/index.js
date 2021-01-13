import React from "react";
import ContentBlock from '../content-block';

export default function TextBlock({ children, textColor, delayOffset = 0, isSquare = false, overlay }) {
	return (
		<ContentBlock
			className="text-block"
			delayOffset={delayOffset}
			isSquare={isSquare}
			overlay={overlay}
			textColor={textColor}
		>
			{children}
		</ContentBlock>
	);
}
