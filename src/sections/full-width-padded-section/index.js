import React from "react";
import Section from '../section';

export default function FullWidthPaddedSection({ children }) {
	return (
		<Section maxWidth={'100%'}>
			{children}
		</Section>
	)
}
