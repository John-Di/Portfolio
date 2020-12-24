import React from "react";
import { FULL_WIDTH_PADDED_SECTION } from './styles';

export default function FullWidthPaddedSection({ children }) {
	return (
		<FULL_WIDTH_PADDED_SECTION hasPadding={true}>
			{children}
		</FULL_WIDTH_PADDED_SECTION>
	)
}
