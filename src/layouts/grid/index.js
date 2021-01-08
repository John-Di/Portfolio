import React from "react";
import { device } from '../../utils/variables';
import {
	GRID,
	ITEM
} from './styles';

// import Navigation from "./navigation"

const RESPONSIVE_DEFAULTS = {
	1: `
		grid-template-columns: repeat(1, 1fr);
	
		@media ${device.laptop} {
			grid-template-columns: repeat(1, 1fr);
		}
	`,
	2: `
		grid-template-columns: repeat(1, 1fr);
	
		@media ${device.tablet} {
			grid-template-columns: repeat(2, 1fr);
		}
	`,
	3: `
		grid-template-columns: repeat(1, 1fr);
	
		@media ${device.tablet} {
			grid-template-columns: repeat(3, 1fr);
		}
	`,
	4: `
		grid-template-columns: repeat(1, 1fr);
	
		@media ${device.tablet} {
			grid-template-columns: repeat(2, 1fr);
		}

		@media ${device.laptop} {
			grid-template-columns: repeat(4, 1fr);
		}
	`
};

export default function Grid({ children, responsive_rules = {} }) {
	const rules = !(Object.keys(responsive_rules).length === 0 && responsive_rules.constructor === Object) ? responsive_rules : RESPONSIVE_DEFAULTS
	return children && (
		<GRID className="grid" rules={rules}>
			{children}
		</GRID>
	);
}
