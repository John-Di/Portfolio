import React from "react";
import Section from '../section';
import { size } from '../../utils/variables';

export default function PaddedSection({ children }) {
	return (
		<Section hasPadding={true}>
			{children}
		</Section>
	)
}
