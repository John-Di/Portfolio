import React from "react";
import { TEXT_BANNER } from './styles';

export default function TextBanner({ children, background = '', backgroundColor = 'none' }) {
	return (
		<TEXT_BANNER background={background} backgroundColor={backgroundColor}>
			{children}
		</TEXT_BANNER>
	)
}
