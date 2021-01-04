import React from "react";
import { BASIC_BANNER } from './styles';

export default function BasicBanner({ children }) {
	return (
		<BASIC_BANNER>
			{children}
		</BASIC_BANNER>
	)
}
