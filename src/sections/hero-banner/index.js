import React from "react";
import { HERO_BANNER } from './styles';

export default function HeroBanner({ children, key, index, backgroundColor, backgroundImage, image_first, reversed, isEven, squareImage = true }) {
	return (
		<HERO_BANNER
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			squareImage={squareImage}
		>
			{children}
		</HERO_BANNER>
	)
}
