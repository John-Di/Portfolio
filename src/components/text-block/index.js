import React from "react";
import ContentBlock from '../content-block';

export default function TextBlock({ children, delayOffset = 0, isSquare = false }) {
	return (
		<ContentBlock
			className="text-block"
			delayOffset={delayOffset}
			isSquare={isSquare}
		>
			{children}
		</ContentBlock>
	);
}
