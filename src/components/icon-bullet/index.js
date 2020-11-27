import React from "react";
import {
	WRAPPER,
	ICON_WRAPPER,
	ICON,
	TEXT
} from './styles';

export default function IconBullet({ icon, textContent, color = '#49586d', fontSize = '1em', gap = { regular: '1em' } }) {
	let iconEl = icon ?
		<ICON_WRAPPER gap={gap}>
			<ICON icon={icon} color={color} />
		</ICON_WRAPPER> : null;

	let textEl = textContent ? <TEXT textSize={fontSize}>{textContent}</TEXT> : null;

	let el = icon || textEl ?
		<WRAPPER>
			{iconEl}
			{textEl}
		</WRAPPER> : null;

	return el
}
