import React from "react";
import {
	WRAPPER,
	ICON_WRAPPER,
	ICON,
	TEXT
} from './styles';

export default function IconBullet({ icon, textContent, color = '#49586d', textSize = '1em', gap = { regular: '1em' } }) {
	let iconEl = icon ?
		<ICON_WRAPPER gap={gap}>
			<ICON icon={icon} color={color} />
		</ICON_WRAPPER> : null;

	let textEl = textContent ? <TEXT textSize={textSize}>{textContent}</TEXT> : null;

	let el = icon || textEl ?
		<WRAPPER textSize={textSize}>
			{iconEl}
			{textEl}
		</WRAPPER> : null;

	return el
}
