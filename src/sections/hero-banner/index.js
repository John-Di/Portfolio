import React from "react";
import { HERO_BANNER } from './styles';
import Section from '../../sections/section';
import {
	idealTextColor
} from '../../utils/IdealTextColor';

export default function HeroBanner({ children, textColor = "#000000", backgroundColor = false, backgroundImage, squareImage = true }) {

	textColor = textColor ? textColor : backgroundColor && idealTextColor(backgroundColor);
	return (
		<Section
			className="hero-banner"
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			textColor={textColor}
			hasMarginSmall={false}
			hasMarginLarge={false}
			hasPadding={false}
			isBanner={true}
			isHero={true}
		>
			{children}
		</Section>
	)
}
