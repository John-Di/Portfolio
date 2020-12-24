import React from "react";
import Section from '../section';

export default function FullWidthSection({ children }) {
	return (
		<Section maxWidth={'100%'} hasPadding={false}>
			{children}
		</Section>
	)
}
