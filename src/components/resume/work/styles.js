import styled from 'styled-components';
import { rhythm } from "../../../utils/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const P = styled.p`
	margin: 0 auto;
	width: 100%;
`;

export const TOGGLE_NAME = styled.h3`
	display: inline-block;
`;

export const TOGGLE_ICON = styled.h3`
	display: inline-block;
	margin-left: 1em;
	margin-right: 0.25em;
	position: relative;
`;

export const FONTAWESOMEICON = styled(FontAwesomeIcon)`
	height: 100%;
	width: 100%;
`;

export const CAREER = styled.ul`
	padding-left: ${rhythm(1.25)};
`;
