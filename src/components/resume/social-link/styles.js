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
		width: ${rhythm(1.5)};
		height: ${rhythm(1.5)}; 
	}
`;
