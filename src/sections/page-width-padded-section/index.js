import React from "react";
import Section from '../section';

export default function PageWidthSection({ children }) {
	return (
		<Section maxWidth={'1440px'}>
			{children}
		</Section>
	)
}
