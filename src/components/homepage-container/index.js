import React from "react";
import Section from '../section';
import {
	CONTAINER
} from './styles';

export default function HomepageContainer({ children, maxWidth = '100%', hasPadding = true }) {
	console.log(children);
	if (!Array.isArray(children)) {
		children = [children];
		console.log("Not an array")
	} else {

		console.log("Oh shit yeah!")
	}

	const NUM_COLS = Math.min(4, children.length);

	return (
		<CONTAINER cols={NUM_COLS} hasPadding={hasPadding} maxWidth={maxWidth}>
			{children}
		</CONTAINER>
	)
}
