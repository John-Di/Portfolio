import styled from 'styled-components';
import { rhythm } from "../../../utils/typography"

export const TOGGLE_NAME = styled.h3`
	display: inline-block;
`;

export const TOGGLE_ICON = styled.span`
	display: inline-block;

	&::before {
		content: '';
		padding: 0 0.5em;
		height: 100%;
		display: inline-block;
	}
`;

export const SECTION = styled.section`
	background: white;
	margin: 0;
	margin-left: auto;
	width: 100%;
	max-width: calc(100% - 32em);
	padding: ${rhythm(1.5)} ${rhythm(1.5)};
	border-radius: 1em;
`;
