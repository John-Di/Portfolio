import React from "react";
import {
	SECTION,
	HEADING
} from './styles';

export default function Section({ children, className, maxWidth = `${size.laptopL}px`, hasMarginSmall = true, hasMarginLarge = true, image = false, backgroundColor = false, hasPadding, heading, preheading, subheading, textAlignmentSmall = 'center', textAlignmentLarge = 'center', heightSmall = false, heightLarge = false, isBanner = false, isHero = false }) {
	return (
		<SECTION
			className={className}
			maxWidth={maxWidth}
			backgroundImage={image}
			hasMarginSmall={hasMarginSmall}
			hasMarginLarge={hasMarginLarge}
			heightSmall={heightSmall}
			heightLarge={heightLarge}
			hasPadding={hasPadding}
			backgroundColor={backgroundColor}
			isBanner={isBanner || isHero}
			isHero={isHero}
		>
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
