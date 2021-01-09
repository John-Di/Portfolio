import React from 'react';
import {
	BUTTON
} from './styles';

export default function Button({ children, backgroundColor, textColor, borderColor, theme }) {

	return (
		<BUTTON
			backgroundColor={backgroundColor}
			textColor={textColor}
			borderColor={borderColor}
			theme={theme}
		>
			{children}
		</BUTTON>);
}
