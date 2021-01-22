import React from 'react';
import Button from '../button';

export default function FancyCTA({ children, modest, backgroundColor, textColor = "#000000", borderColor }) {

	borderColor = borderColor ? borderColor : textColor;

	return (
		<Button
			modest={modest}
			backgroundColor={backgroundColor}
			textColor={textColor}
			borderColor={borderColor}
			theme={'fancy'}
		>
			{children}
		</Button>);
}
