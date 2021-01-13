import React from "react";
import {
	SECTION,
	HEADING
} from './styles';

export default function Section({ children, maxWidth = '100%', hasMarginSmall = true, hasMarginLarge = true, image, backgroundColor, hasPadding = false, heading, preheading, subheading, textAlignmentSmall, textAlignmentLarge }) {
	return (
		<SECTION maxWidth={maxWidth} backgroundImage={image} hasMarginSmall={hasMarginSmall} hasMarginLarge={hasMarginLarge} hasPadding={hasPadding} backgroundColor={backgroundColor}>
			{
				(heading || subheading || preheading) &&
				<HEADING className="section-heading" textAlignmentSmall={textAlignmentSmall} textAlignmentLarge={textAlignmentLarge}>
					{preheading}
					{heading}
					{subheading}
				</HEADING>
			}
			{children}
		</SECTION>
	)
}
