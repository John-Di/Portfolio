import React from "react";
import {
	BLOCK,
	CONTAINER,
	CONTENT
} from './styles';

export default function ContentBlock({ backgroundColor = false, backgroundImage, children, animated = true, delayOffset = 0, isSquare, overlay = false, textColor = '#000000' }) {
	return (
		<BLOCK
			className="text-block"
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			delayOffset={delayOffset}
			isSquare={isSquare}
			overlay={overlay}
			textColor={textColor}
		>
			<CONTAINER
				overlay={overlay}
			>
				<CONTENT
					data-aos={animated && 'fade-up'}
					data-aos-delay={animated && `${750 + delayOffset}`}
					data-aos-duration={animated && '1000'}
					backgroundColor={backgroundColor}
					textColor={textColor}
				>
					{children}
				</CONTENT>
			</CONTAINER>
		</BLOCK>
	);
}
