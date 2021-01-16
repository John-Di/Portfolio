import React from "react";
import {
	GRID_ITEM
} from './styles';

export default function GridItem({ children, maxWidth = '100%' }) {

	return (
		<GRID_ITEM maxWidth={maxWidth} className="grid__item">
			{children}
		</GRID_ITEM>
	);
}
