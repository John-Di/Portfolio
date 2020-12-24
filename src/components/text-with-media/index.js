import React from "react";
import {
	CONTAINER,
	CONTENT
} from './styles';

export default function TextWithMedia({ cols, backgroundColor, backgroundImage, image_first, reversed, children }) {

	return (
		<CONTAINER
			cols={cols}
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			image_first={image_first}
			reversed={reversed}
		>
			<CONTENT withMedia={!!backgroundImage}>
				{children}
			</CONTENT>
		</CONTAINER>
	);
}
