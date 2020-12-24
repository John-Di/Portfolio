import React from "react";
import {
	SECTION
} from './styles';

export default function Section({ children, maxWidth = '100%', image, backgroundColor, hasPadding = false }) {
	return (
		<SECTION maxWidth={maxWidth} backgroundImage={image} hasPadding={hasPadding} backgroundColor={backgroundColor}>
			{children}
		</SECTION>
	)
}
