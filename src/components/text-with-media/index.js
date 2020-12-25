import React from "react";
import {
	WRAPPER,
	CONTENT,
	SINGLE,
	DOUBLE,
	TRIPLE,
	QUAD
} from './styles';

export default function TextWithMedia({ cols, backgroundColor, backgroundImage, image_first, reversed, children }) {
	// console.log('TextWithMedia', cols, backgroundColor, backgroundImage, image_first, reversed, children);

	let num_cols = cols ? cols : children.length;

	let TEXT_WITH_MEDIA;

	switch (num_cols) {
		case 1: TEXT_WITH_MEDIA = SINGLE; break;
		case 2: TEXT_WITH_MEDIA = DOUBLE; break;
		case 3: TEXT_WITH_MEDIA = TRIPLE; break;
		case 4: TEXT_WITH_MEDIA = QUAD; break;
		default: TEXT_WITH_MEDIA = SINGLE; break;
	}
	return (
		<TEXT_WITH_MEDIA
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			image_first={image_first}
			reversed={reversed}
		>
			<WRAPPER>
				<CONTENT>{children}</CONTENT>
			</WRAPPER>
		</TEXT_WITH_MEDIA>
	);
}
