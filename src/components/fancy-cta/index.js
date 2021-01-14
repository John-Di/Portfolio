import React from 'react';
import Button from '../button';
import {
	idealTextColor
} from '../../utils/randoms'

export default function FancyCTA({ children, modest, parentColor, backgroundColor, textColor = "#000000", borderColor }) {

	textColor = textColor ? textColor : idealTextColor(backgroundColor ? backgroundColor : parentColor);
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
