import React from "react";
import { PAGE_WIDTH_PADDED_SECTION } from './styles';

export default function PageWidthSection({ children }) {
	return (
		<PAGE_WIDTH_PADDED_SECTION hasPadding={true}>
			{children}
		</PAGE_WIDTH_PADDED_SECTION>
	)
}
