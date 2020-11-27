import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";

export const LINK = styled.a`
	display: block;
	box-shadow: none;
	text-decoration: none;
	overflow: hidden;
	fill: #${props => props.color};
	transition: fill 0.1s ease 0s;

	&:hover {
		fill: black;
	}

	svg {
		width: 1.96875em;
		height: 1.96875em; 
	}
`;
