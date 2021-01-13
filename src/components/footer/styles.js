import styled from 'styled-components';
import { device } from '../../utils/variables';
import { SECTION } from '../../sections/section/styles';
import {
	randomColor,
	idealTextColor
} from '../../utils/randoms';

let bk = randomColor();
let fg = idealTextColor(bk);

export const FOOTER = styled.footer`
	max-width: 100vw;
	width: 100%;
	z-index: 1;
	padding: 2em 0;

	background: ${bk};

	@media ${device.tablet} {
		padding: 5em 0;
	}
`;

export const NAV = styled.nav`
	width: 100%;
	height: 100%;
`;

export const LIST = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	height: 100%;

	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;

	@media ${device.tablet} {
		padding: 0 4%;
		flex-direction: row;
	}

`;

export const LI = styled.li`
	margin: 0;

	&:hover a {
		${props => {
		return `
			background-color: ${bk};
			color: ${fg}
		`;
	}}
	}
`;

export const ITEM = styled.a`
	display: flex;
	background: inherit;
	color: black;
	min-width: 5em;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
	padding: 0 1em;
	transition: background-color 0.1s solid 0s;

	@media ${device.tablet} {
		height: 100%;
	}
`;