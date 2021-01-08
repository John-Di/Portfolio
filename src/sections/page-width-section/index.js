import React from "react";
import Section from '../section';
import { size } from '../../utils/variables';

export default function PageWidthSection({ children }) {
	return (
		<Section maxWidth={`${size.laptopL}px`}>
			{children}
		</Section>
	)
}
