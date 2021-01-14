import React from "react";
import { HERO_BANNER } from './styles';
import {
	idealTextColor
} from '../../utils/IdealTextColor';

export default function HeroBanner({ children, textColor = "#000000", backgroundColor = false, backgroundImage, squareImage = true }) {

	textColor = textColor ? textColor : backgroundColor && idealTextColor(backgroundColor);
	return (
		<HERO_BANNER
			className="hero-banner"
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			textColor={textColor}
			squareImage={squareImage}
		>
			{children}
		</HERO_BANNER>
	)
}
