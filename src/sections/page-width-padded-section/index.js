import React from "react";
import Section from '../section';
import { size } from '../../utils/variables';

export default function PageWidthPaddedSection({ children }) {
	return (
		<Section hasPadding={true} maxWidth={`${size.laptopL}px`}>
			{children}
		</Section>
	)
}
