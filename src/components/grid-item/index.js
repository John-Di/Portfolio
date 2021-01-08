import React from "react";
import { device } from '../../utils/variables';
import {
	GRID_ITEM
} from './styles';

export default function GridItem({ children, maxWidth }) {

	return (
		<GRID_ITEM maxWidth={maxWidth} className="grid__item">
			{children}
		</GRID_ITEM>
	);
}
