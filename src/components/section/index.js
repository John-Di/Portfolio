import React from "react";
import {
	SECTION
} from './styles';

export default function Section({ children, width, background }) {

	return (
		<SECTION width={width} background={background}>
			{children}
		</SECTION>
	)
}
