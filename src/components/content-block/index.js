import React from "react";
import {
	BLOCK,
	CONTAINER,
	CONTENT
} from './styles';

export default function ContentBlock({ backgroundColor = '', backgroundImage = '', children, animated = true, delayOffset = 0, isSquare }) {

	return (
		<BLOCK
			className="text-block"
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			delayOffset={delayOffset}
			isSquare={isSquare}
		>
			<CONTAINER
			>
				<CONTENT
					data-aos={animated && 'fade-up'}
					data-aos-delay={animated && `${750 + delayOffset}`}
					data-aos-duration={animated && '1000'}
				>
					{children}
				</CONTENT>
			</CONTAINER>
		</BLOCK>
	);
}
