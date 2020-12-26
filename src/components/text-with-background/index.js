import React from "react";
import {
	WRAPPER,
	CONTENT,
	TEXT_WITH_BACKGROUND
} from './styles';

export default function TextWithBackground({ cols, backgroundColor, backgroundImage, image_first, reversed, children }) {
	// console.log('TextWithMedia', cols, backgroundColor, backgroundImage, image_first, reversed, children);

	let num_cols = cols ? cols : children.length;
	// let font_color = 
	return (
		<TEXT_WITH_BACKGROUND
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
		>
			<WRAPPER>
				<CONTENT>{children}</CONTENT>
			</WRAPPER>
		</TEXT_WITH_BACKGROUND>
	);
}
