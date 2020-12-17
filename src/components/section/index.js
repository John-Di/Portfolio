import React from "react";
import {
	SECTION,
	INNER
} from './styles';

export default function Section({ children, maxWidth = '100%', background, bkcolor, hasPadding = true }) {

	return (
		<SECTION maxWidth={maxWidth} background={background} hasPadding={hasPadding} bkcolor={bkcolor}>
			{children}
		</SECTION>
	)
}
