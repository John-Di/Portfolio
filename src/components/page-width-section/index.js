import React from "react";
import Section from '../section';
import {
	PAGEWIDTH
} from './styles';

export default function PageWidthSection({ children, background }) {

	return (
		<Section background={background}>
			<PAGEWIDTH>
				{children}
			</PAGEWIDTH>
		</Section>
	)
}
