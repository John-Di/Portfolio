import React from "react";
import { HERO_BANNER } from './styles';
import {
	idealTextColor
} from '../../utils/randoms';

export default function HeroBanner({ children, textColor = "#000000", backgroundColor, backgroundImage = '#FFFFFF', squareImage = true }) {

	textColor = idealTextColor(backgroundImage);
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
