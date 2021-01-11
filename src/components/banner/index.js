import React from "react";
import { BANNER } from './styles';

export default function Banner({ children, textAlignment }) {
	return (
		<BANNER
			textAlignment={textAlignment}>
			{children}
		</BANNER>
	)
}
