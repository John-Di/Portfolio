import React from "react";
import { HERO_BANNER } from './styles';

export default function HeroBanner({ children, backgroundColor, backgroundImage, squareImage = true }) {
	return (
		<HERO_BANNER
			className="hero-banner"
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			squareImage={squareImage}
		>
			{children}
		</HERO_BANNER>
	)
}
