import React from "react";
import Section from '../../components/section';
export default function TextBanner({ children, maxWidth = `100%` }) {

	return (
		<Section
			className="text-banner"
			hasMarginSmall={true}
			hasMarginLarge={true}
			heightSmall={'50vh'}
			heightLarge={'50vh'}
			hasPadding={false}
			maxWidth={maxWidth}
			textAlignmentSmall={`center`}
			textAlignmentLarge={`center`}
			isBanner={true}
		>
			{children}
		</Section>
	)
}
