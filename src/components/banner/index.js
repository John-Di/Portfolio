import React from "react";
import { BANNER } from './styles';

export default function Banner({ children, textAlignment }) {
	console.log('DAF', textAlignment)
	return (
		<BANNER
			textAlignment={textAlignment}>
			{children}
		</BANNER>
	)
}
