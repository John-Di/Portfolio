import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DURATION = styled.span`
	margin: 0 0.25em 0 0.5em;
	line-height: inherit;
	font-size: 0.875em;
	position: relative;
`;

export const ICON = styled.span`
	display: inline-block;
	margin-right: 0.25em;
	position: relative;
`;

export const WRAPPER = styled.span`
	margin-left: 0;
	line-height: inherit;
	position: relative;
	display: inline-block;
`;

export const FONTAWESOMEICON = styled(FontAwesomeIcon)`
	height: 100%;
	width: 100%;
`;
