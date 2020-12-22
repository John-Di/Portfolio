import React from "react";
import {
	SECTION
} from './styles';

export default function Section({ children, maxWidth = '100%', image, bkcolor, hasPadding = true }) {

	return (
		<SECTION maxWidth={maxWidth} bkimage={image} hasPadding={hasPadding} bkcolor={bkcolor}>
			{children}
		</SECTION>
	)
}
